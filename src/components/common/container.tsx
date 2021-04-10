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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows:  1fr;
  padding: 2rem;
`

export const DetailContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
  width:20rem;
  height: 20rem;
`

export const AppContainer = styled.div`
  background-color: ${props => props.theme.white};
`