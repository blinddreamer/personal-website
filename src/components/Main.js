import React from 'react'
import styled from 'styled-components'
import { SiDocker } from "react-icons/si";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";


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
      <Text>coming soon-ish <br></br> eventually</Text>
    </Box>
    <Footer>
      <table>
        <td title="twitter"><Links><FiTwitter /></Links></td>
        <td title="docker"><Links><SiDocker /></Links></td>
        <td title="github"><Links><FiGithub /></Links></td>
        <td title="email"><Links><FiMail /></Links></td>
      </table>
      <Copy>&copy; huku.rocks </Copy>
    </Footer>
    </>
  )
}
export default Main