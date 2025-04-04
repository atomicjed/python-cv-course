import React, {useState} from "react";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import {db, storage} from "../../firebaseSingleton.js";
import CustomDropzone from "../Dropzone.jsx";
import Button from "../Button.jsx";

export function ImageUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  function onFileDropped(droppedFiles) {
    setUploadedFiles((prevWorkToSubmit) => {
      const currentWorkToSubmit = prevWorkToSubmit || [];
      return [...currentWorkToSubmit, ...droppedFiles];
    });
  }

  async function onUpload() {

    setIsUploading(true);
    try {
      for (const file of uploadedFiles) {
        const uniqueFileName = `${file.name + v4()}`;
        const fileRef = ref(storage, `uploaded-image/${uniqueFileName}`);

        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);

        setUrls((prevUrls) => [...prevUrls, downloadURL]);
      }
    } catch(e) {
      console.error('Error submitting work:', e);
      setError('Oops there was an error submitting your work. Drop me an email and I will get this sorted for you!');
    } finally {
      setIsUploading(false);
      setUploadedFiles(null);
    }
  }

  return (
    <div
      className={`container relative z-2 flex flex-col px-6 sm:px-12 md:px-24 lg:px-32`}>
      <h1 className={'my-8 text-[20px]'}>Image Uploads</h1>
      <div className={"flex flex-col items-center gap-6"}>
        <CustomDropzone isUploading={isUploading} onChange={(droppedFile) => {
          onFileDropped(droppedFile)
        }}/>
        <div className={'flex justify-start w-full lg:w-[80%] text-gray-600 gap-4'}>
          {uploadedFiles?.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>

        <div className={"lg:w-[80%] flex items-center gap-4 justify-start w-full"}>
          <Button className={'bg-white text-black'} onClick={onUpload} >Upload</Button>
          {isUploading && <p>Uploading...</p>}
        </div>
        <p className={'text-red-700'}>{error}</p>
        <div className={'flex flex-col gap-6'}>
          {
            urls.map(url => (
              <div key={url}>{url}</div>
            ))
          }
        </div>

      </div>
    </div>
  )
}