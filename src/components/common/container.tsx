import styled from 'styled-components'

export const DefaultContainer = styled.div`
  height: fit-content;
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
`

export const DetailContainerRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr;
  grid-gap: .5rem;
  margin: .5rem;
  background-color: skyblue;
`

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


export const AppContainer = styled.div`
  background-color: ${props => props.theme.white};
`