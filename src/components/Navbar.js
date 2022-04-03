import React from 'react'
import styled from 'styled-components'
import env from "@beam-australia/react-env";

const Menu = styled.div`
font-size: 1em;
color:rgba(255, 255, 255, 0.5);
margin-right:10px;
`
const Box = styled.div`
margin-left:2%;
position:fixed;
margin-top:2%;
`


const Navbar = () => {
  return (
    <Box>
      <table>
        <td><Menu id="menu">{env("MENU1")}</Menu></td>
        <td><Menu id="menu"><a target="_blank" href={env("MENU2LINK")}>{env("MENU2")}</a></Menu></td>
      </table>
    </Box>
  )
}
export default Navbar