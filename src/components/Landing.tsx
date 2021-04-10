import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { User } from '../type'
import styled from 'styled-components'

// component
import Card from './Card'
import { Heading2 } from './common/typography'

const LandingBox = styled.div`
  minWidth: 240px; 
  margin: 2rem auto; 
  padding: 3rem 1rem;
  align-content: flex-start;
  justify-content: space-around;
  border: 2rem solid ${props => props.theme.primary};
  background-color: ${props => props.theme.white};
  border-radius: 1rem;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-auto-rows: 22rem;
  justify-items: center;
  align-items: center;

  position: relative;
`

const LandingHeading = styled(Heading2)`
  position: absolute;
  top: -4rem;
  left: 2rem;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.white};
  border: .6rem solid ${props => props.theme.gold};
  padding: 2rem;
`
const Landing = () => {
  const { user, getUser } = useContext(UserContext)

  // get user on mount
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
      <LandingHeading>The Board of Honor</LandingHeading>
      {user.map((i: User, index) => <Card key={i.id+index} user={i}></Card>)}
    </LandingBox>
  )
}

export default Landing