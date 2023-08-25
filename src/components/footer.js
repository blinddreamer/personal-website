import React, { Fragment } from "react";
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si";

const SocialLink = ({ url, icon }) => (
  <a href={url} aria-label={icon.name}>
    {icon}
  </a>
);

const Footer = () => {
  return (
    <Fragment>
      <table>
        <tr>
          <SocialLink
            url="https://twitter.com/HukuA"
            icon={<SiTwitter />}
            label="Link to Twitter Icon"
          />
          <SocialLink
            url="https://hub.docker.com/u/blinddreamer"
            icon={<SiDocker />}
            label="Link to GitHub Icon"
          />
          <SocialLink
            url="https://github.com/blinddreamer/"
            icon={<SiGithub />}
            label="Link to Docker  Icon"
          />
          <SocialLink
            url="mailto:blinddreamer@huku.rocks"
            icon={<SiGmail />}
            label="Linik to Mail Icon"
          />
        </tr>
        <tr>
          <div id="copu">&copy; huku.rocks</div>
        </tr>
      </table>
    </Fragment>
  );
};

export default Footer;
