import React from 'react'
import styled from 'styled-components'
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si";
import env from "react-dotenv";

const TEXT1 = process.env.REACT_APP_TEXT1 || "huku.rocks";
const TEXT2 = process.env.REACT_APP_TEXT2 || "coming soon-ish";
const TEXT3 = process.env.REACT_APP_TEXT3 || "eventually";
const TWITTER = process.env.REACT_APP_TWITTER || "https://twitter.com/HukuA";
const DOCKER = process.env.REACT_APP_DOCKER || "https://hub.docker.com/u/blinddreamer";
const GITHUB = process.env.REACT_APP_GITHUB || "https://github.com/blinddreamer/personal-website";
const EMAIL = process.env.REACT_APP_EMAIL || "mailto:blinddreamer@huku.rocks";
const COPY = process.env.REACT_APP_COPY || "huku.rocks";

const Box = styled.div`
margin-left:2%;
padding: 15% 0% 0% 0%;
`
const Title = styled.h1`
color: #fff;
font-weight: 700;
line-height: 1.25em;
font-size: 3.25em;
`
const Text = styled.p`
color: rgba(255, 255, 255, 0.5);
font-size: 1.35em;
text-shadow: 0 0 2px #000; /* homework */
`
const Footer = styled.div`
margin-left:2%;
Margin: 1em 0 0 0 0;
height:100px;
position:fixed;
bottom:3%;
`
const Links = styled.table`
color: rgba(255, 255, 255, 0.5);
`
const Copy = styled.p`
color: rgba(255, 255, 255, 0.5);
font-size: 0.8em;
`

const Main = () => {
  return (
    <>
    <Box>
      <Title>{TEXT1}</Title>
      <Text>{TEXT2}<br></br>{TEXT3}</Text>
    </Box>
    <Footer>
      <table>
        <td title="twitter"><a target="_blank" href={TWITTER} title="twitter"><Links><SiTwitter /></Links></a></td>
        <td title="docker"><a target="_blank" href={DOCKER} title="dockerhub"><Links></Links><SiDocker /></a></td>
        <td title="github"><a target="_blank" href={GITHUB} title="github"><Links><SiGithub /></Links></a></td>
        <td title="email"><a target="_blank" href={EMAIL} title="email"><Links><SiGmail /></Links></a></td>
      </table>
      <Copy>&copy; {COPY}</Copy>
    </Footer>
    </>
  )
}
export default Main