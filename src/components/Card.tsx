import styled from 'styled-components'
import { User } from '../type'
// component
import { Heading3, SubHeading } from './common/typography'
import { Avatar, CardButton } from './common/interactibles'
import { CardContainer as Container} from './common/container'

// navigation
import { useHistory } from 'react-router-dom'

const CardContainer = styled(Container)`
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
      color: ${props => props.theme.white};
    }
  }
`

const Card = (props: {user: User}) => {
  const { user } = props
  const history = useHistory()
  return (
    <CardContainer onClick= {() => {history.push(`/profile/${user.id}`)}}>
      <Avatar> {user.name.charAt(0)} </Avatar>
      <Heading3> {user.name} </Heading3>
      <SubHeading> { '@'+user.username }</SubHeading>
      <CardButton> more details </CardButton>
    </CardContainer>
  )
}

export default Card