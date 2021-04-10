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
`

export const AppContainer = styled.div`
  background-color: ${props => props.theme.white};
`