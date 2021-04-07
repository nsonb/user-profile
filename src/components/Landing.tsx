import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { User } from '../type'
import styled from 'styled-components'

// component
import Card from './Card'

const LandingBox = styled.div({
  display: 'flex',
  flexWrap: 'wrap', 
  width: '80%', 
  minWidth: '240px', 
  maxWidth: '800px', 
  margin: '0 auto', 
  padding: '3rem 2rem',
  alignContent: 'flex-start',
  justifyContent: 'space-around'
})
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
    <LandingBox>
      {user.map((i: User, index) => <Card key={i.id+index} user={i}></Card>)}
    </LandingBox>
  )
}

export default Landing