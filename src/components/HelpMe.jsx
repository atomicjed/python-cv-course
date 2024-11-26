import {useNavigate} from "react-router-dom";

export default function HelpMe() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/help-me')} className={'md:-rotate-90 fixed bottom-0 md:bottom-1/2 left-0 md:-left-12 z-10 bg-primary text-white px-8 py-4 md:pt-8 md:pb-4 rounded-tr-2xl md:rounded-b-2xl transition duration-300 ease-in-out md:hover:translate-x-1.5 cursor-pointer font-medium md:font-black'}>HELP ME!</div>
  )
}