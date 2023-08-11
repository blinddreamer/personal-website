import React from "react";
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <a href="https://twitter.com/HukuA" title="Twitter" aria-label="Twitter">
        <SiTwitter />
      </a>
      <a
        href="https://hub.docker.com/u/blinddreamer"
        title="DockerHub"
        aria-label="DockerHub"
      >
        <SiDocker />
      </a>
      <a
        href="https://github.com/blinddreamer/"
        title="GitHub"
        aria-label="GitHub"
      >
        <SiGithub />
      </a>
      <a href="mailto:blinddreamer@huku.rocks" title="Email" aria-label="Email">
        <SiGmail />
      </a>
      <br />
      <div id="copu">&copy; huku.rocks</div>
    </div>
  );
};

export default Footer;
