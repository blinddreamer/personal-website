import React from 'react';
import video from '../assets/bg.mp4';

const Body = () => {
  return (
    <>
      <div id="dots"></div>
      <video id="video" autoPlay playsInline={true} disablePictureInPicture={true} muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Body;
