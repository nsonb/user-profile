import styled from 'styled-components'

export const SwitchButton = styled.div`
  height: 3rem;
  width: 8rem;
  background-color: ${props => props.theme.dark_grey};
  border-radius: .8rem;
  cursor: pointer;
  line-height: 3rem;
  transition: all .4s;

  &::after{
    content: "";
    border-radius: .8rem;
    height: 100%;
    width: 30%;
    background-color: ${props => props.theme.white};
    float: ${props => props.theme.position};
    box-shadow: 1px 1px 1px rgba(0,0,0,.2);
    transition: all .4s;
  }
`

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
  font-weight: 800;
  border: none;
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.dark_grey};
  cursor: pointer;
  transition: all .4s;

  &:hover {
    background-color: ${props => props.theme.gold};
    color: ${props => props.theme.primary};
  }
`

export const BackButton = styled.button`
  outline: none;
  border: none;
  color: ${props => props.theme.dark_grey  };
  background-color: ${props => props.theme.white};
  padding: 1rem;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    color: ${props => props.theme.gold};
    background-color: none;
    text-decoration: underline;
  }
`

export const ProfileButton = styled(BackButton)`
  background-color: ${props => props.theme.gold};
  color: ${props => props.theme.primary};
  border-radius: .5rem;
  width: 8rem;
  padding: 1rem;
  &:hover {
    color: ${props => props.theme.white};
    text-decoration: none;
  }
`

//