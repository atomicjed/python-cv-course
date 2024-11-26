import {createContext, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const ModulesContext = createContext({});

export default function ModulesProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  
  function handleModuleSelected(moduleSelected) {
    if (isNaN(moduleSelected)) {
      console.error("Invalid input: module id is not a number");
      return;
    }
    
    const moduleId = Number(moduleSelected);
    
    if (moduleId % 2 === 0) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
    
    navigate(`/${moduleId}`);
  }
  
  return (
    <ModulesContext.Provider value={{isDarkMode, handleModuleSelected, setIsDarkMode}}>
      {children}
    </ModulesContext.Provider>
  )
}

export function useModules() {
  return useContext(ModulesContext);
}