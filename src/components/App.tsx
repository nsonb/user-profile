import { UserContextProvider } from '../context/UserContext'

// components
import Landing from './Landing'

const App = () => {
  return (
    <UserContextProvider>
      <Landing></Landing>
    </UserContextProvider>
  )
}

export default App;
