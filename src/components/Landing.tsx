import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { User } from '../type'
import styled from 'styled-components'

// component
import Card from './Card'
import { Heading2, Quote } from './common/typography'
import { LandingBox } from './common/container'

const LandingHeading = styled(Heading2)`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.white};
  border: .6rem solid ${props => props.theme.gold};
  padding: 1rem;
  text-align: center;

  @media screen and (max-width: 488px) {
    width: 90%;
  }
`

const LandingQuote = styled(Quote)`
  grid-column: 1 / -1;
  text-align: left;
`
const Landing = () => {
  const { user, getUser } = useContext(UserContext)
  // stop useEffect on rerender
  const [ mount, setMount] = useState<Boolean>(false)
  // get user on mount
  useEffect(() => {
    if(getUser && !mount) {
      getUser()
      setMount(true)
    }
  }, [getUser, mount])

  // when data is not yet returned from server
  if ( user === undefined) return <LandingBox>Loading...</LandingBox>
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