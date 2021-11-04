import React from 'react'
import './App.css'
import {
  AboutMe,
  ContactMe,
  MyExperiences
} from './Pages'

import { SidebarMenu } from './Components'

export const App = () => {

  return (
    <div class="background">
      <SidebarMenu />
      <div class="content-pane">
        <div class="divider">
          <AboutMe />
        </div>
        <div class="divider">
          <MyExperiences />
        </div>
        <div class="divider">
          <ContactMe />
        </div>
      </div>

    </div>
  )
}

export default App
