import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { User } from '../type'
import styled from 'styled-components'

// component
import Card from './Card'
import { Heading2, Quote } from './common/typography'

const LandingBox = styled.div`
  minWidth: 240px; 
  margin: 2rem auto 0; 
  padding: 5rem 1rem;
  align-content: flex-start;
  justify-content: space-around;
  border: 2rem solid ${props => props.theme.primary};
  background-color: ${props => props.theme.white};
  border-radius: 1rem;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(5rem, 1fr));
  grid-auto-rows: 23rem;
  justify-items: center;
  align-items: center;

  position: relative;

  @media screen and (max-width: 488px) {
    border: .5rem solid ${props => props.theme.primary};
  }
`
const LandingHeading = styled(Heading2)`
  position: absolute;
  top: -4rem;
  left: 2rem;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.white};
  border: .6rem solid ${props => props.theme.gold};
  padding: 2rem;

  @media screen and (max-width: 488px) {
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    text-align: center;
    width: 90%;
  }
`

const LandingQuote = styled(Quote)`
  grid-column: 1 / -1;
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
      <LandingQuote>These are the people who have given their all. Their all precious time. Their all freedom. For the greatness that is us.</LandingQuote>
      <LandingHeading>The Board of Honor</LandingHeading>
      {user.map((i: User, index) => <Card key={i.id+index} user={i}></Card>)}
      
    </LandingBox>
  )
}

export default Landing