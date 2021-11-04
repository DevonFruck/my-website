import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Call, BadgeRounded, Menu, Attractions } from '@mui/icons-material'

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
        <Menu fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          {isExpanded ? 'Menu' : null }
        </span>
      </MenuButton>
      
      <MenuButton
        onClick={() => setIsExpanded(!isExpanded)}
      >
        
        <BadgeRounded fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          {isExpanded ? 'About Me' : null }
        </span>
      </MenuButton>
      
      <MenuButton
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Attractions fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          {isExpanded ? 'Experiences' : null }
        </span>
      </MenuButton>

      <MenuButton
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Call fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          {isExpanded ? 'Contact Me' : null }
        </span>
      </MenuButton>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: red;
  width: ${({ isExpanded }) => isExpanded ? '15rem':'4rem'};
  transition: width 0.1s linear;

  /* FADE ANIMATIONS */
  .fade-enter {
      opacity: 0;
    }

    .fade-enter-active {
      opacity: 1;
      transition: opacity 400ms;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0;
      transition: opacity 400ms;
    }
  
`

const MenuButton = styled.button `
  display: flex;
  height: 5rem;
  width: 100%;
  border-radius: 0px;

  &:hover {
    color: blue;
  }
  
  span {
    z-index: 1000;
    font-size: 2rem;
    padding-left: 1rem;

    
  }
`
