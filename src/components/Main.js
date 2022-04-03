import React from 'react'
import styled from 'styled-components'
import { SiDocker, SiGithub, SiTwitter, SiGmail } from "react-icons/si";

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
      <Title>huku.rocks</Title>
      <Text>coming soon-ish<br></br>eventually</Text>
    </Box>
    <Footer>
      <table>
        <td title="twitter"><a href="https://twitter.com/HukuA" title="twitter"><Links><SiTwitter /></Links></a></td>
        <td title="docker"><a href="https://hub.docker.com/u/blinddreamer" title="dockerhub"><Links></Links><SiDocker /></a></td>
        <td title="github"><a href="https://github.com/blinddreamer/" title="github"><Links><SiGithub /></Links></a></td>
        <td title="email"><a href="mailto:blinddreamer@huku.rocks" title="email"><Links><SiGmail /></Links></a></td>
      </table>
      <Copy>&copy; huku.rocks</Copy>
    </Footer>
    </>
  )
}
export default Main