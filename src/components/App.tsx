import { UserContextProvider } from '../context/UserContext'
import Header from './Header'
import Footer from './Footer'

// components
import Landing from './Landing'

const App = () => {
  return (
    <UserContextProvider>
      <Header/>
      <Landing/>
      <Footer/>
    </UserContextProvider>
  )
}

export default App;
