import styled from 'styled-components'

export const SwitchButton = styled.div``

export const Avatar = styled.div`
  background-color: ${props => props.theme.dark_grey};
  height: 9rem;
  width: 100%;
  color: ${props => props.theme.white};
  text-align: center;
  font-size: 2.5rem;
  line-height: 9rem;
  clip-path: circle(30% at 50% 50%);
  transition: all .4s;
  font-family: 'Montserrat',sans-serif;
  font-weight: 300;
`

export const Button = styled.button`
  outline: none;
  border-radius: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  border: none;
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.dark_grey};
  cursor: pointer;
  transition: all .4s;
`

//