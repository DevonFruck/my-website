import {
  Button
} from '@material-ui/core'
import logo from '../logo.svg';
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <StyledButton
      variant='contained'
      href='/about'
      >
        About me
      </StyledButton>

      <StyledButton
      variant='contained'
      href={'/experience'}
      >
        Experience
      </StyledButton>

      <StyledButton
      variant='contained'
      href={'/contacts'}
      >
        Contact me
      </StyledButton>
    </header>
  )
}

const StyledButton = styled(Button)`
  background-color: grey;
  color: white;
  width: 10rem;
  
`
