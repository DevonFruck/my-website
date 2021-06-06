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
              <Link to="/contact">My Experiences</Link>
            </li>
          </ul>
        </nav>

        {/* Switch for determining which component to make visible */}
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/aboutme">
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


    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
        variant='contained'
        color='primary'
        onClick={() => console.log('about me!')}
        >
          About me
        </Button>
        <Button
        variant='contained'
        color='primary'
        onClick={() => console.log('experience!')}
        >
          Experience
        </Button>
        <Button
        variant='contained'
        color='primary'
        onClick={() => console.log('contact me')}
        >
          Contact me
        </Button>
      </header>
    </div>
  )
}
*/

export default App;
