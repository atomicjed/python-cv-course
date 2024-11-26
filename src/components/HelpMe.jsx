import {useNavigate} from "react-router-dom";

export default function HelpMe() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/help-me')} className={'sm:-rotate-90 fixed bottom-0 sm:bottom-1/2 left-0 sm:-left-12 z-10 bg-primary text-white px-8 py-4 sm:pt-8 sm:pb-4 rounded-tr-2xl sm:rounded-b-2xl transition duration-300 ease-in-out sm:hover:translate-x-1.5 cursor-pointer font-medium sm:font-black'}>HELP ME!</div>
  )
}