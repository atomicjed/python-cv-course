import Section from "./Section.jsx";
import {displayTitle} from "../lib/utils/displayInfo.utils.jsx";
import React, {useState} from "react";
import Button from "./Button.jsx";
import {useModules} from "../lib/context/modules.context.jsx";
import {db} from "../firebaseSingleton.js";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFile} from "@fortawesome/free-solid-svg-icons";

export function SubmitMessage({ moduleNumber, submittedWork, onUpdate }) {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const { isDarkMode } = useModules();

  async function onSubmit() {

    setIsUploading(true);
    try {
      const date = new Date().toISOString();
      const messageSubmitRef = doc(db, `Module${moduleNumber}`, `Message sent at: ${date}`);
      await setDoc(messageSubmitRef, {
        message: message,
        submittedAt: date,
      });
    } catch(e) {
      console.error('Error submitting work:', e);
      setError('Oops there was an error submitting your work. Drop me an email and I will get this sorted for you!');
    } finally {
      onUpdate();
      setIsUploading(false);
      setMessage('');
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
        {displayTitle("Ready to Move on?", isDarkMode)}
        <p data-aos={"fade-right"} className={"pb-12"}>I hope you're feeling accomplished, that's a lot of content you just went through! It will set us up beautifully to crack on with the course and build some really cool projects. Drop a message here to say you're ready to move on and I will make the next module available to you, where we're going to build our first motion detection algorithm!</p>

        <div className={"flex flex-col items-start gap-6"}>
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
                    <FontAwesomeIcon className={'text-primary text-2xl'} icon={faEnvelope}/>
                  </div>
                  <div key={index} className={'flex flex-col w-full items-start'}>
                    <div className={'w-full flex justify-between'}>
                      <div>{file.message}</div>
                      <div
                        className={'text-red-500 underline cursor-pointer hover:text-red-700 transition duration-300 ease-in-out'}
                        onClick={() => deleteDocument(file.id)}>Delete
                      </div>
                    </div>
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