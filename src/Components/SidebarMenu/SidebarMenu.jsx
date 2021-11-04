import React, { useState } from 'react'
import { Call, BadgeRounded, Menu, Code } from '@mui/icons-material'
import './SidebarMenu.css'
export const SidebarMenu = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div class="wrapper" style={ isExpanded ? { width: '20rem'} : {width: '3.5rem'}}>
      <button class="menu-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Menu fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          Menu
        </span>
      </button>
      
      <button class="menu-btn"
        onClick={() => {console.log('implement me')}}
      >
        <BadgeRounded fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          About Me
        </span>
      </button>
      
      <button class="menu-btn"
        onClick={() => {console.log('implement me')}}
      >
        <Code fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          Experiences
        </span>
      </button>

      <button class="menu-btn"
        onClick={() => {console.log('implement me')}}
      >
        <Call fontSize='large' style={{ margin:"auto 0" }}/>
        <span style={{ margin:"auto 0" }}>
          Contact Me
        </span>
      </button>
    </div>
  )
}
