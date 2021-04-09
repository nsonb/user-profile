import styled from 'styled-components'

export const DefaultContainer = styled.div`
  height: fit-content;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
`

export const GridContainer = styled.div`
  display: grid;
  
`