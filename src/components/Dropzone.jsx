import {useDropzone} from "react-dropzone";
import {useCallback} from "react";

export default function CustomDropzone({onChange, isUploading}) {
  const onDrop = useCallback(acceptedFiles => {
    onChange(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} className={`${!isUploading ? 'bg-white hover:bg-gray-200' : 'bg-gray-200'} ${!isUploading ? 'cursor-pointer' : ''} transition duration-300 ease-in-out p-12 text-black rounded-2xl border border-dashed border-black lg:max-w-[80%] min-w-full  lg:min-w-[80%] h-[250px] flex flex-col justify-center items-center text-center `}>
      {
        isUploading ? (
          <p>Uploading...</p>
        ) : (
          <>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop your work here, or click to select files</p>
            }
          </>
        ) 
      }
    </div>
  );
}