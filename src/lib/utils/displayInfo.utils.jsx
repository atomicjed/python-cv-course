import Text from "../../components/Text.jsx";
import React, {useRef} from "react";
import VideoPlayer from "../../components/VideoPlayer.jsx";
import videojs from "video.js";

export function displayTitle(title, isDarkMode) {
  return <Text data-aos="fade-right" component={"h2"} variant={"h2"} className={`pb-8 ${isDarkMode ? '' : 'text-black'}`}>{title}</Text>;
}

export function displayImages(images) {
  return (
    <div className={'flex flex-col lg:flex-row justify-center gap-8 py-8'}>
      {images.map((image, index) => (
        <img key={index} src={image.image} alt={image.alt} className={`object-contain border-2 border-dashed border-secondary w-full ${images.length > 1 ? 'lg:max-w-[45%]' : 'lg:max-w-[80%]'} rounded-2xl`} />
      ))}
    </div>
  );
}

export function displayList(list, isDarkMode) {
  return (
    <ul className={''}>
      {list.map((listItem, index) => (
        <React.Fragment key={index}>
          {listItem.bulletPoint && <li className={`${isDarkMode ? '' : 'text-black'}`} data-aos="fade">{listItem.bulletPoint}</li>}
          {listItem.images && displayImages(listItem.images)}
          {listItem.link && <li className={'flex flex-wrap'}><a className={`${isDarkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} transition duration-300 ease-in-out underline cursor-pointer`} href={listItem.link.link}>{listItem.link.name}</a></li>}
        </React.Fragment>
      ))}
    </ul>
  );
}

export function displayYoutubeVideo(url) {
  return (
    <div className={'lg:max-w-[80%] flex justify-center aspect-video'}>
      <iframe width="100%" height="100%" src={url}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export function displayVideo(video, videoThumbnail) {
  const playerRef = useRef(null);
  
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: videoThumbnail ?? undefined,
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
  return (
    <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
  )
}