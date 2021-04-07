import styled from 'styled-components'
import { User } from '../type'

//
import { Heading3, SubHeading } from './common/typography'
import { Avatar, Button } from './common/interactibles'

const CardButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`

const CardContainer = styled.div`
  display: block;
  height: 20rem;
  width: 15rem;
  margin: 0;
  padding: .8rem;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.secondary};
  border-radius: 1rem;
  margin: .5rem;
  cursor: pointer;
  transition: all .4s;
  box-shadow: 0px 5px 8px 1px rgba(0,0,0,0.2);
  position: relative;

  &:hover {
    transform: translateY(-.4rem);
    box-shadow: 0px 6px 8px 1px rgba(0,0,0,0.3);
    color: ${props => props.theme.primary};

    & ${Avatar} {
      font-size: 3rem;
      background-color: ${props => props.theme.secondary};
      color: ${props => props.theme.gold};;
      clip-path: circle(35% at 50% 50%);
      font-weight: 800;
    }

    & ${CardButton} {
      background-color: ${props => props.theme.gold};
      color: ${props => props.theme.primary};
    }
  }
`



const Card = (props: {user: User}) => {
  const { user } = props
  return (
    <CardContainer>
      <Avatar> {user.name.charAt(0)} </Avatar>
      <Heading3> {user.name} </Heading3>
      <SubHeading> { '@'+user.username }</SubHeading>
      <CardButton> more details </CardButton>
    </CardContainer>
  )
}

export default Card