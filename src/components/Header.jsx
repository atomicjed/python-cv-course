import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import {brainwave, pythonIcon} from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import {availableModules} from "../lib/utils/modules.utils.js";
import {useModules} from "../lib/context/modules.context.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb, faMoon} from "@fortawesome/free-solid-svg-icons";
const Header = ({ navigation }) => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { isDarkMode, handleModuleSelected, setIsDarkMode } = useModules();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b ${isDarkMode ? 'lg:bg-n-8/90 border-n-6' : 'lg:bg-n-1/90 border-secondary'} lg:backdrop-blur-sm ${
        openNavigation ? `${isDarkMode ? 'bg-n-8' : 'bg-white'}` : `${isDarkMode ? 'bg-n-8/90' : 'bg-n-1/90'} backdrop-blur-sm`
      }`}
    >
      <div className="flex h-20 items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
      <img src={pythonIcon} alt={"python icon"} className={"w-10 h-10 object-cover absolute left-5 lg:left-7.5 xl:left-10"} />

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {
              openNavigation ? 
                availableModules.map((module) => (
                  <div
                    key={module.id}
                    onClick={() => {
                      enablePageScroll();
                      handleModuleSelected(module.id);
                    }}
                    className={`${isDarkMode ? 'text-n-1 hover:text-secondary' : 'text-black hover:text-primary'} block cursor-pointer relative font-code text-2xl uppercase transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12`}
                  >
                    {module.moduleName}
                  </div>
                ))
                :
                navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    onClick={handleClick}
                    className={`block relative font-code text-2xl uppercase ${isDarkMode ? 'text-n-1 hover:text-secondary' : 'text-black hover:text-primary'} transition-colors ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12`} 
              >
                {item.title}
              </a>
            ))
            }
          </div>

          <HamburgerMenu isDarkMode={isDarkMode} />
        </nav>

        <div className={'flex gap-4 items-center absolute right-5 lg:right-7.5 xl:right-10'}>
          <div onClick={() => setIsDarkMode(!isDarkMode)}
               className={`h-10 cursor-pointer w-10 bg-secondary flex items-center justify-center border-2 border-solid border-secondary rounded-2xl`}>
            <FontAwesomeIcon className={''} icon={!isDarkMode ? faMoon : faLightbulb}/>
          </div>

          <Button isDarkMode={isDarkMode} className="hidden lg:flex" onClick={toggleNavigation}>
            {openNavigation ? 'Contents' : 'Modules'}
          </Button>

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg isDarkMode={isDarkMode} openNavigation={openNavigation}/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
