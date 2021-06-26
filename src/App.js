import React, { useState, useEffect } from 'react'
import './App.css'
import styled from 'styled-components'
import { Tabs, Tab } from '@material-ui/core'
import {
  AboutMe,
  ContactMe,
  MyExperiences,
  HomePage
} from './Pages'

export const App = () => {
  const [tabIndex, setTabIndex] = useState(1)

  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  return (
    <Background>
      <CustomTabs
      orientation="vertical"
      value = {tabIndex}
      onChange={handleChange}
      >
        <Tab label='About Me' value={1} />
        <Tab label='Experience' value={2} />
        <Tab label='Contact' value={3} />
      </CustomTabs>

      {tabIndex === 1
        ? <AboutMe />
        : tabIndex === 2
        ? <MyExperiences />
        : tabIndex === 3
        ? <ContactMe />
        : null
      }

    </Background>
  )
}

const CustomTabs = styled(Tabs)`
  width: 10rem;
  font-size: 8px;
  padding-right: 2rem;
`

const Background = styled.header`
  display: flex;
  background-color: royalblue;
  min-height: 100vh;
`

export default App
