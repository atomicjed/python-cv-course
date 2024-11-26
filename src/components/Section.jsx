import SectionSvg from "../assets/svg/SectionSvg";
import {useModules} from "../lib/context/modules.context.jsx";
import {useEffect} from "react";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  const { isDarkMode } = useModules();
  
  return (
    <div
      id={id}
      className={`
      relative 
      ${isDarkMode ? '': 'bg-white'}
      ${
        customPaddings ||
        `py-20 lg:py-32 xl:py-40`
      } 
      ${className || ""}`}
    >
      {children}

      <div className={`hidden absolute top-0 left-5 w-0.25 h-full ${isDarkMode ? 'bg-stroke-1' : 'bg-secondary'} pointer-events-none md:block lg:left-7.5 xl:left-10`} />
      <div className={`hidden absolute top-0 right-5 w-0.25 h-full ${isDarkMode ? 'bg-stroke-1' : 'bg-secondary'} pointer-events-none md:block lg:right-7.5 xl:right-10`} />

      {crosses && (
        <>
          <div
            className={`absolute top-0 left-7.5 right-7.5 h-0.25 ${isDarkMode ? 'bg-stroke-1' : 'bg-secondary'} ${
              crossesOffset && crossesOffset
            } pointer-events-none block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
