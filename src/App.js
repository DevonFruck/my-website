import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {
  AboutMe,
  ContactMe,
  MyExperiences,
  HomePage
} from './Pages'

export const App = () => {
  return (
    <Router>
        {/* For debug */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">My Experiences</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>

        {/* Switch for determining which component to make visible */}
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/experience">
            <MyExperiences />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>

        </Switch>
    </Router>
  )
}

export default App
