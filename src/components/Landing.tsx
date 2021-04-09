import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { User } from '../type'
import styled from 'styled-components'

// component
import Card from './Card'

const LandingBox = styled.div({
  minWidth: '240px', 
  margin: '0 auto', 
  padding: '3rem 1rem',
  alignContent: 'flex-start',
  justifyContent: 'space-around',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
  gridAutoRows: '22rem',
  justifyItems: 'center',
  alignItems: 'center'
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
      <LandingBox>Loading...</LandingBox>
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