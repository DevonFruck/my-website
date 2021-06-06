import {
  Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/aboutme' style={{ textDecoration: 'none' }}>
          <StyledButton
          variant='contained'
          >
            About me
          </StyledButton>
        </Link>

        <Link to='/experience' style={{ textDecoration: 'none' }}>
          <StyledButton
          variant='contained'
          color='primary'
          to={'/experience'}
          >
            Experience
          </StyledButton>
        </Link>

        <Link to='/contacts' style={{ textDecoration: 'none' }}>
          <StyledButton
          variant='contained'
          color='primary'
          to={'/contacts'}
          >
            Contact me
          </StyledButton>
        </Link>

      </header>
    </div>
  )
}

const StyledButton = styled(Button)`
  background-color: royalblue;
  color: white;
  width: 10rem;
  font-family: 'Comic Sans MS';
`
