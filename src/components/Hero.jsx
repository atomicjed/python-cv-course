import {heroBackground, heroBgWhite } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import videojs from "video.js";
import VideoPlayer from "./VideoPlayer.jsx";
import {useModules} from "../lib/context/modules.context.jsx";

const Hero = ({ title, subHeading, video, videoThumbnail }) => {
  const playerRef = useRef(null);
  const { isDarkMode } = useModules();

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: videoThumbnail,
    sources: [{
      src: video,
      type: 'video/mp4'
    }]
  };

  function handlePlayerReady(player) {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  }
  
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative pb-10 bg-white lg:pb-10" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className={`${isDarkMode ? '' : 'text-black'} h1 mb-6`}>
            {title}
          </h1>
          <p className={`body-1 max-w-3xl mx-auto mb-6 ${isDarkMode ? 'text-n-2' : 'text-n-6'} lg:mb-8`}>
            {subHeading}
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-1 rounded-2xl bg-conic-gradient flex items-center justify-center flex-col overflow-hidden">
            <div className={'w-[358px] md:w-[1016px] rounded-2xl overflow-hidden'}>
              <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          </div>
          <div className={`absolute flex justify-center items-center ${isDarkMode ? '-top-[200%]' : '-top-[120%]'} left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] ${isDarkMode ? 'lg:-top-[104%]' : 'lg:-top-[97%]'}`}>
            <img
              src={isDarkMode ? heroBackground : heroBgWhite}
              className={`${isDarkMode ? 'w-full' : 'w-[70%] lg:w-full'}`}
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles isDarkMode={isDarkMode} />
        </div>
        
        {/*<CompanyLogos className="hidden relative z-10 mt-20 lg:block" />*/}
    </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
