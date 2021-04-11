import styled from 'styled-components'

export const DefaultContainer = styled.div`
  height: fit-content;
  min-height: 3rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  margin-top: 0;
`
  
export const DetailContainerColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export const DetailContainerRow = styled.div`
  display: grid;
  grid-template-rows: minmax(2rem,1fr);
  grid-gap: .5rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: auto-fit;
  grid-gap: .5rem;
  padding: 1rem;
  padding: 2.5rem;
`

export const LandingBox = styled.div`
  margin: 4rem auto 0; 
  width: 90%;
  padding: 5rem 1rem;
  align-content: flex-start;
  justify-content: space-around;
  border: .2rem solid ${props => props.theme.primary};
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
    border: .1rem solid ${props => props.theme.primary};
  }
`

export const AppContainer = styled.div`
  background-color: ${props => props.theme.white};
  min-height: 100vh;
`

// experimental
/*
div {
    &:nth-child(4n) {
      grid-column: 1 / 3;
      background-color: blue;
    }
    &:nth-child(4n+1) {
      grid-column: 2 / 4;
      background-color: green;
    }
    &:nth-child(4n+2) {
      grid-column: 3 / 4;
      background-color: red;
    }
    &:nth-child(4n+3) {
      grid-column: 3 / 5;
      background-color: yellow;
    }
  }
*/
