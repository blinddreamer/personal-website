import React from 'react'
import styled from 'styled-components'

const Menu = styled.table`
font-size: 1em;
color:rgba(255, 255, 255, 0.5);
`
const Box = styled.div`
margin-left:2%;
`

const Navbar = () => {
  return (
    <Box>
      <table>
        <td><Menu>home</Menu></td>
        <td><Menu>services</Menu></td>
      </table>
    </Box>
  )
}
export default Navbar