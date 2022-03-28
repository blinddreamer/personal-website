import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
color: #fff;
font-size: 3.25em;`
const Text = styled.p`
color: #fff;`
const Links = styled.p`
color: #fff;`
const Copy = styled.p`
color: #fff;`

const Main = () => {
  return (
    <div>
        <Title>huku.rocks</Title>  
        <Text>coming soon-ish <br></br> eventually</Text>
        <Links>twitter</Links>  
        <Links>docker</Links>  
        <Links>github</Links>  
        <Links>email</Links>  
        <Copy>&copy; huku.rocks </Copy>
    </div>
  )
}

export default Main