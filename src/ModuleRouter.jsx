import {useParams} from "react-router-dom";
import ModuleTwo from "./modules/ModuleTwo.jsx";
import ErrorPage from "./constants/ErrorPage.jsx";
import ModuleOne from "./modules/ModuleOne.jsx";
import ModulesProvider, {useModules} from "./lib/context/modules.context.jsx";
import {useEffect} from "react";
import Footer from "./components/Footer.jsx";
import ModuleThree from "./modules/Module3.jsx";


export default function ModuleRouter() {
  const { moduleNumber } = useParams();
  const { handleModuleSelected } = useModules();

  useEffect(() => {
    if (!isNaN(moduleNumber)) {
      handleModuleSelected(moduleNumber);
    }
  }, [moduleNumber]);

  const moduleMap = {
    "1": <ModuleOne moduleNumber={1} />,
    "2": <ModuleTwo moduleNumber={2} />,
    "3": <ModuleThree moduleNumber={3} />,
  };

  return (
    <>
      {moduleMap[moduleNumber] || <ErrorPage />}
      <Footer />
    </>
  );
};