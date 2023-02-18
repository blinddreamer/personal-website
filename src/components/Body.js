import React from 'react'
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si"
import video from '../assets/bg.mp4';

const Body = () => {
  return (
    <>
    <div id="dots"></div>
    <video id="video" autoPlay playsinline="true" disablePictureInPicture="true" muted loop >
      <source src={video} type="video/mp4"/>
    </video>
    <div id="box-div">
      <h1>huku.rocks</h1>
      <h2><span id="coming">coming soon-ish.</span>  
      </h2>
    </div>
    <div id="footer">
      <table id="td">
        <td title="twitter"><a href="https://twitter.com/HukuA" title="twitter"><SiTwitter /></a></td>
        <td title="docker"><a href="https://hub.docker.com/u/blinddreamer" title="dockerhub"><SiDocker /></a></td>
        <td title="github"><a href="https://github.com/blinddreamer/" title="github"><SiGithub /></a></td>
        <td title="email"><a href="mailto:blinddreamer@huku.rocks" title="email"><SiGmail /></a></td>
      </table>
      <h3>&copy; huku.rocks</h3>
    </div>
    </>
  )
}

export default Body