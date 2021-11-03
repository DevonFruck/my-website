import React, { useState, useEffect } from 'react'
import { Button, Avatar, SvgIcon } from '@material-ui/core'
import styled from 'styled-components'
import { ReactComponent as Wave } from '../Assets/wave.svg'
import PersonIcon from '@mui/icons-material/Person';

export const SidebarMenu = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect( () => {
    console.log(isExpanded);
  }, [isExpanded])

  return (
    <StyledDiv isExpanded={isExpanded}>
      <MenuButton 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <PersonIcon />
        {isExpanded ? 'Menu' : null }
      </MenuButton >
      
      <MenuButton>
        <PersonIcon />
        {isExpanded ? 'About Me' : null }
      </MenuButton >
      
      <MenuButton>
        <PersonIcon />
        {isExpanded ? 'Experiences' : null }
      </MenuButton >

      <MenuButton>
        <PersonIcon />
        {isExpanded ? 'Contact Me' : null }
      </MenuButton >
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: red;
  width: ${({ isExpanded }) => isExpanded ? '10rem':'3rem'};
`

const MenuButton = styled.button `
  display: flex;
  align-content: flex-start;
  //height: 5rem;
  //width: 15rem;
`
