import styled from 'styled-components'
import { User } from '../type'

//
import { Heading3 } from './common/typography'
const CardContainer = styled.div`
  display: block;
  height: 16rem;
  width: 12rem;
  margin: 0;
  padding: 1rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.tertiary};
  border-radius: .8rem;
  margin: .5rem;
  cursor: pointer;
`

const Card = (props: {user: User}) => {
  const { user } = props
  return (
    <CardContainer>
      <Heading3>
        {user.name}
      </Heading3>
    </CardContainer>
  )
}

export default Card