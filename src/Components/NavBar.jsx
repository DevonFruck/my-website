import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import styled from 'styled-components'

export const NavBar = () => {
  return (
    <StyledDiv>
      <ButtonGroup >
        <StyledButton variant='contained' href='/'>Home</StyledButton>
        <StyledButton variant='contained' href='/about'>About Me</StyledButton>
        <StyledButton variant='contained' href='/experience'>Experience</StyledButton>
        <StyledButton variant='contained' href='/contact'>Contact Me</StyledButton>
      </ButtonGroup>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`

const StyledButton = styled(Button)`
  height: 5rem;
  width: 15rem;
`
