import styled from 'styled-components'

export const Heading1 = styled.h1`
  display: block;
  min-width: 40rem;
  font-size: 11rem;
  font-family: 'Space Grotesk', sans-serif;
  color: ${props => props.theme.primary};
  transition: all .2s;
  padding: .4rem;
  line-height: 10rem;
`
export const Heading2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.primary};
  font-size: 2rem;
`

// 100;200;300;400;800
export const Heading3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: .2rem;
  font-weight: 800;
  font-size: 1.2rem;
  width: 100%;
  height: fit-content;
  color: ${props => props.theme.primary};
`

export const SubHeading = styled.h4`
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: ${props => props.theme.dark_grey};
`

export const Emphasis = styled.span`
  color: ${props => props.theme.gold};
  cursor: pointer;
  transition: all .1s;
  padding: .4rem;
  margin-top: 1rem;
  display: content;
  font-family: 'Lobster', cursive;
  &:hover {
    color: ${props => props.theme.primary};
  }
`

export const Quote = styled.p`
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.primary};
  padding: 1rem;
  font-size: 1.2rem;
`

export const ProfileText = styled.p`
  font-size: 4.5rem;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.light_grey};
  line-height: 3rem;
  font-style: italic;
  width: fit-content;
`

export const ProfileHeader = styled.h2`
  font-size: 10rem;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.gold};
  line-height: 7rem;
  width: fit-content;
  padding: .5rem;
`
