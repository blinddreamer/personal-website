import React from 'react';
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div id="footer">
      <table id="td">
        <tbody>
          <tr>
            <td>
              <a href="https://twitter.com/HukuA" title="Twitter" aria-label="Twitter">
                <SiTwitter />
              </a>
            </td>
            <td>
              <a href="https://hub.docker.com/u/blinddreamer" title="DockerHub" aria-label="DockerHub">
                <SiDocker />
              </a>
            </td>
            <td>
              <a href="https://github.com/blinddreamer/" title="GitHub" aria-label="GitHub">
                <SiGithub />
              </a>
            </td>
            <td>
              <a href="mailto:blinddreamer@huku.rocks" title="Email" aria-label="Email">
                <SiGmail />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>&copy; huku.rocks</h3>
    </div>
  );
};

export default Footer;
