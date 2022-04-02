import React from 'react'
import styled from 'styled-components'

const MENU1 = process.env.REACT_APP_MENU1 || "home";
const MENU2 = process.env.REACT_APP_MENU2 || "monitor";
const MENU2LINK = process.env.REACT_APP_MENU2LINK || "https://monitor.huku.rocks";

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
        <td><Menu id="menu">{MENU1}</Menu></td>
        <td><Menu id="menu"><a target="_blank" href={MENU2LINK}>{MENU2}</a></Menu></td>
      </table>
    </Box>
  )
}
export default Navbar