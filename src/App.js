import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  AboutMe,
  ContactMe,
  MyExperiences,
  HomePage
} from './Pages'

import styled from 'styled-components'
import {
  NavBar
} from './Components'
export const App = () => {
  return (
    <Background>
      <NavBar />
      <Router >
        

        {/* Switch for determining which component to make visible */}
        <Switch>  
          
          {/* About me page */ }
          <Route path='/about'>
            <AboutMe />
          </Route>

            {/* My previous experiences */ }
          <Route path='/experience'>
            <MyExperiences />
          </Route>

          {/* Page with ways to contact me */ }
          <Route path='/contact'>
            <ContactMe />
          </Route>

          {/* Home page */ }
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Background>
  )
}

const Background = styled.header`
  background-color: royalblue;
  min-height: 100vh;
`

export default App
