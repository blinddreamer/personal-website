//video + dots div

import React, { useState, Fragment} from 'react';
import video from '../assets/bg.mp4';

const Body = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <Fragment>
    <div id="dots"/>
      <video
        id="video"
        autoPlay
        playsInline={true}
        disablePictureInPicture={true}
        muted
        loop
        onLoadedData={handleVideoLoad}
        style={{ display: isVideoLoaded ? 'block' : 'none' }}
      >
        <track kind="captions" srcLang="en" label="Video caption" />

        <source src={video} type="video/mp4" />
      </video>
    </Fragment>
  );
};

export default Body;