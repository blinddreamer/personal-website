import React from 'react';
import Footer from "../components/footer"
import video from '../assets/bg.mp4';

const Home = () => {
  return (
    <>
      <div id="dots"></div>
      <video id="video" autoPlay playsInline={true} disablePictureInPicture={true} muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div id="box-div">
        <h1>huku.rocks</h1>
        <h2><span id="coming">coming soon-ish.</span></h2>
      </div>
      <Footer />
    </>
  );
};

export default Home;
