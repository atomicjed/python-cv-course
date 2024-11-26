import Button from "./Button.jsx";
import React, {useState} from "react";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import {sendHelpEmail} from "../services/emailJS.service.js";

export default function HelpMePage() {
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  async function onSubmit(e) {
    e.preventDefault();
    const responseStatus = await sendHelpEmail(fromEmail, message);
    if (responseStatus === 200)
      setSuccessMessage('Email sent, I will be in touch shortly!');
    else 
      setErrorMessage('There was an error sending your email, please let me know and I will get this sorted');
  }
  
  return (
    <div className={'w-full h-[100vh] bg-white flex justify-center items-center text-black'}>
      <form className={'flex w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex-col gap-6'}>
        <div className={'flex flex-col gap-2'}>
          <label>Your email:</label>
          <input 
            onChange={(e) => setFromEmail(e.target.value)}
            value={fromEmail}
            placeholder={'email@example.com'} 
            className={'bg-gray-100 border border-solid border-secondary rounded-2xl p-4'} 
            type={"email"}
          />
        </div>
        <div className={'flex flex-col'}>
          <label>What do you need help with?</label>
          <textarea 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder={'I am struggling with...'} 
            className={'min-h-48 bg-gray-100 border border-solid border-secondary rounded-2xl p-4'} 
          />
        </div>
        <div>
          <Button onClick={onSubmit} isDarkMode={false}>Send</Button>
          <ButtonGradient />
        </div>
        {errorMessage && <p className={'text-red-700'}>{errorMessage}</p>}
        {successMessage && <p className={'text-secondary'}>{successMessage}</p>}
      </form>
    </div>
  )
}