import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

export const NavBar = () => {
  return (
      <ButtonGroup>
        <Link to={'/about'}>
          <Button>About Me</Button>
        </Link>

        <Link to={'/experience'}>
          <Button>Experience</Button>
        </Link>

        <Link to={'/contact'}>
          <Button>Contact Me</Button>
        </Link>
      </ButtonGroup>
  )
}