import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { User } from '../type'

const Landing = () => {
  const { user, getUser } = useContext(UserContext)

  useEffect(() => {
    if(getUser) {
      getUser()
    }
  }, [])

  // when data is not yet returned from server
  if ( user === undefined) {
    return (
      <div>Loading...</div>
    )
  }
  
  // when data is responded from server
  return (
    <div>
      I am Landing
      {user.map((i: User, index) => <div key={i.id+index}>{i.name}</div>)}
    </div>
  )
}

export default Landing