import React from 'react'
import styled from 'styled-components'


const Menu = styled.div`
font-size: 1em;
color:rgba(255, 255, 255, 0.5);
`
const Box = styled.div`
margin-left:2%;
position:fixed;
`


const Navbar = () => {
  return (
    <Box>
      <table>
        <td><Menu id="menu">home</Menu></td>
        <td><Menu id="menu"><a target="_blank" href="https://monitor.huku.rocks">monitor</a></Menu></td>
      </table>
    </Box>
  )
}
export default Navbar