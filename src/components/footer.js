import React from 'react';
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <table id="td">
          <tbody>
            <tr>
              <td title="twitter"><a href="https://twitter.com/HukuA" title="twitter"><SiTwitter /></a></td>
              <td title="docker"><a href="https://hub.docker.com/u/blinddreamer" title="dockerhub"><SiDocker /></a></td>
              <td title="github"><a href="https://github.com/blinddreamer/" title="github"><SiGithub /></a></td>
              <td title="email"><a href="mailto:blinddreamer@huku.rocks" title="email"><SiGmail /></a></td>
            </tr>
          </tbody>
        </table>
        <h3>&copy; huku.rocks</h3>
      </div>
    </>
  );
};

export default Footer;
