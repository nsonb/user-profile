import styled from 'styled-components'

export const Heading1 = styled.h1`
  display: block;
  width: fit-content;
  font-size: 2.5rem;
  margin: auto 1rem;
  font-family: 'Lobster', cursive;
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: all .2s;
  padding: .4rem;

  &:hover {
    color: ${props => props.theme.gold};;
  }
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