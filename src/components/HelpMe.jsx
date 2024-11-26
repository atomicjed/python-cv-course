import {useNavigate} from "react-router-dom";

export default function HelpMe() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/help-me')} className={'-rotate-90 fixed -left-14 sm:-left-12 z-10 top-1/2 bg-primary text-white px-8 pt-6 sm:pt-8 pb-2 sm:pb-4 rounded-b-2xl transition duration-300 ease-in-out hover:translate-x-1.5 cursor-pointer font-medium sm:font-black'}>HELP ME!</div>
  )
}