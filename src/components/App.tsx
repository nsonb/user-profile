import { UserContextProvider } from '../context/UserContext'
import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'

// theme
import { ThemeProvider } from 'styled-components'
import { light_theme, dark_theme } from './common/theme'

// components
import Landing from './Landing'
import Header from './Header'
import Footer from './Footer'


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
  const [ theme, setTheme ] = useState(true)

  const switchTheme = () => {
    setTheme(!theme)
  }
  return (
    <UserContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme? light_theme : dark_theme}>
        <div>
          <Header setTheme={switchTheme} mode={theme? 'day' : 'night'}/>
          <Landing/>
          <Footer/>
        </div>
        
      </ThemeProvider>
    </UserContextProvider>
  )
}

export default App;
