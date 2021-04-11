import { UserContextProvider } from '../context/UserContext'
import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { useStoredData } from '../hook/useStoredData'

// theme
import { ThemeProvider } from 'styled-components'
import { light_theme, dark_theme } from './common/theme'

// components
import Landing from './Landing'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'

// container
import { AppContainer } from './common/container'

// routing
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// global style for reset
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`

const App = () => {
  const { data: theme, setCurrentData: setTheme}  = useStoredData('theme', 'light')
  const [ conventional, setConventional ] = useState(true)

  // for switching theme in themeprovider
  const switchTheme = () => {
    console.log(theme)
    theme === 'light'? setTheme('dark') : setTheme('light')
  }

  const switchConvention = () => {
    setConventional(!conventional)
  }

  return (
    <UserContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light'? light_theme : dark_theme}>
        <AppContainer>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Header 
                  setTheme={switchTheme} 
                  mode={theme === 'light'? ' light ' : ' dark '} 
                  setConvention = {switchConvention} 
                  conventionMode = {conventional? 'conventional' : 'unconventional'}
                />
                <Landing/>
              </Route>
              <Route path='/profile/:id'>
                <Profile/>
              </Route>
            </Switch>
          </Router>
          <Footer></Footer>
        </AppContainer>
        
      </ThemeProvider>
    </UserContextProvider>
  )
}

export default App;
