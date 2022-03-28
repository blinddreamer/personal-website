import React from 'react'
import styled from 'styled-components'

const Menu = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
color:black;
border-color:white;
`

const Navbar = () => {
  return (
    <div>
      <Menu>Service Status</Menu>
    </div>
  )
}

export default Navbar