import styled from 'styled-components'

export const Heading1 = styled.h1`
  display: block;
  width: 40rem;
  font-size: 12rem;
  font-family: 'Space Grotesk', sans-serif;
  color: ${props => props.theme.primary};
  transition: all .2s;
  padding: .4rem;
  line-height: 12rem;
`
export const Heading2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.primary};
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
`

export const SubHeading = styled.h4`
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: ${props => props.theme.dark_grey};
`

export const Emphasis = styled.span`
  color: ${props => props.theme.gold};
  background-color: ${props => props.theme.primary};
  cursor: pointer;
  transition: all .1s;

  &:hover {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.gold};
  }
`