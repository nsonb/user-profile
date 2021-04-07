import { UserContextProvider } from '../context/UserContext'
import { createGlobalStyle } from 'styled-components'

// theme
import { ThemeProvider } from 'styled-components'
import { light_theme } from './common/theme'

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
  return (
    <UserContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={light_theme}>
        <Header/>
        <Landing/>
        <Footer/>
      </ThemeProvider>
    </UserContextProvider>
  )
}

export default App;
