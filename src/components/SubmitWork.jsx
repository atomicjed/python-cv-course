import CustomDropzone from "./Dropzone.jsx";
import Section from "./Section.jsx";
import {displayTitle} from "../lib/utils/displayInfo.utils.jsx";
import React, {useEffect, useState} from "react";
import Button from "./Button.jsx";
import {useModules} from "../lib/context/modules.context.jsx";
import {db, storage} from "../firebaseSingleton.js";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {sendSubmissionEmail} from "../services/emailJS.service.js";

export function SubmitWork({ moduleNumber, submittedWork, onUpdate, text = undefined }) {
  const [workToSubmit, setWorkToSubmit] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const { isDarkMode } = useModules();
  
  function onFileDropped(droppedFiles) {
    setWorkToSubmit((prevWorkToSubmit) => {
      const currentWorkToSubmit = prevWorkToSubmit || [];
      return [...currentWorkToSubmit, ...droppedFiles];
    });
  }
  
  async function onSubmit() {
    if (workToSubmit === null) return;
    
    setIsUploading(true);
    try {
      for (const file of workToSubmit) {
        const uniqueFileName = `${file.name + v4()}`;
        const fileRef = ref(storage, `Module${moduleNumber}/${uniqueFileName}`);

        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);

        const workSubmitRef = doc(db, `Module${moduleNumber}`, uniqueFileName);
        await setDoc(workSubmitRef, {
          fileName: file.name,
          downloadURL: downloadURL,
          message: message,
          submittedAt: new Date().toISOString(),
        });
        
        const response = await sendSubmissionEmail();
        if (response !== 200) 
          console.error('There was an error sending submission email');
      }
    } catch(e) {
      console.error('Error submitting work:', e);
      setError('Oops there was an error submitting your work. Drop me an email and I will get this sorted for you!');
    } finally {
      onUpdate();
      setIsUploading(false);
      setMessage('');
      setWorkToSubmit(null);
    }
  }
  
  async function deleteDocument(documentId) {
    try {
      // Reference to the specific Firestore document
      const docRef = doc(db, `Module${moduleNumber}`, documentId);

      // Delete the document
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document:", error);
    } finally {
      onUpdate();
    }
  }
  
  return (
    <Section crosses>
      <div className={`container relative z-2 flex flex-col px-6 sm:px-12 md:px-24 lg:px-32 ${isDarkMode ? '' : 'text-black'}`}>
        {displayTitle("Submit your Work", isDarkMode)}
        <p data-aos="fade-right" className={"py-6"}>Please drag and drop your work here in any format you prefer (video, PDF, photo, etc.). Once I’ve reviewed it, I’ll release the next module for you.</p>
        <p data-aos={"fade-right"} className={"pb-12"}>{text ? text : "Along with your submission, feel free to leave a quick message sharing how you found the module. If you have any specific ideas or projects you’d like to work on in future modules, or any feedback on how I could make the course more engaging, I'd love to hear it!"}</p>

        <div className={"flex flex-col items-center gap-6"}>
          <CustomDropzone isUploading={isUploading} onChange={(droppedFile) => {onFileDropped(droppedFile)}} />
          {workToSubmit !== null && (
            <div className={'flex justify-start w-full lg:w-[80%] text-gray-600 gap-4'}>
              {workToSubmit.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
          )}
          <textarea 
            onChange={(event) => setMessage(event.target.value)} 
            value={message}
            disabled={isUploading}
            className={`border border-white rounded-2xl ${!isUploading ? 'text-white' : 'text-gray-700'} p-4 w-full lg:w-[80%] min-h-32`}
            placeholder={"Provide a quick message here.."} />
          <div className={"lg:w-[80%] flex items-center gap-4 justify-start w-full"}>
            <Button onClick={onSubmit} isDarkMode={isDarkMode}>Submit</Button>
            {isUploading && <p>Submitting...</p>}
          </div>
          <p className={'text-red-700'}>{error}</p>
          {submittedWork.length !== 0 && (
            <div
              className={`flex flex-col gap-8 w-full lg:w-[80%] border border-secondary border-solid rounded-2xl p-6`}>
              {submittedWork.map((file, index) => (
                <div className={'flex items-center gap-4'}>
                  <div
                    className={'border border-secondary border-dashed h-14 w-14  flex items-center justify-center rounded-2xl'}>
                    <FontAwesomeIcon className={'text-primary text-2xl'} icon={faFile}/>
                  </div>
                  <div key={index} className={'flex flex-col w-full items-start'}>
                    <div className={'w-full flex justify-between'}>
                      <a
                        className={`${isDarkMode ? 'text-primary hover:text-secondary' : 'text-primary hover:text-secondary'} transition duration-300 ease-in-out underline cursor-pointer`}
                        href={file.downloadURL}>{file.fileName}</a>
                      <div
                        className={'text-red-500 underline cursor-pointer hover:text-red-700 transition duration-300 ease-in-out'}
                        onClick={() => deleteDocument(file.id)}>Delete
                      </div>
                    </div>
                    <div>{file.message}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}