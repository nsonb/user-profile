import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { User } from '../type'
import styled from 'styled-components'

// axios
import { getSinglePlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

// component
import { ProfileText, ProfileHeader } from './common/typography'
import { GridContainer, DetailContainerColumn, DetailContainerRow } from './common/container'
import { Button } from './common/interactibles'

const ValueSpan = styled.span`
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.gold};
  font-style: normal;
  font-weight: 500;
`

const ProfileButton = styled(Button)`
  background-color: ${props => props.theme.gold};
  color: black;
`

const PseudoElement = styled.div`
  height: 2rem;
  width: 100%;
`

const Profile = () => {
  const { id } = useParams<{id:string}>()
  const [ user, setUser ] = useState<User>()
  const history = useHistory()

  useEffect(() => {
    getSinglePlaceHolder(id)
      .then((res: AxiosResponse) => {
        const resData= JSON.parse(JSON.stringify(res.data)) as User
        console.log(resData)
        setUser(resData)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }, [])

  if (user === undefined) {
    return (
      <GridContainer>
        Loading
      </GridContainer>
    )
  }

  return (
    <GridContainer style={{height: '100%'}}>
      <Button
        style={{width: '8rem'}} 
        onClick={() => {history.goBack()}}>
          Back
      </Button>

      <PseudoElement />

      <DetailContainerRow>
          <ProfileText> @{user.username} </ProfileText>
          <ProfileHeader>{user.name}</ProfileHeader>
      </DetailContainerRow>

      <PseudoElement />

      <DetailContainerColumn>
        <ProfileText style={{gridColumn: '1 / 3'}}>
          <ValueSpan>email:</ValueSpan>  <br/>
          {user.email}
        </ProfileText>
        <ProfileText style={{gridColumn: '3/ 5'}}>
          <ValueSpan>phone:</ValueSpan>  <br/> 
          {user.phone}
        </ProfileText>
      </DetailContainerColumn>

      <DetailContainerColumn>
        <ProfileText>
          <ValueSpan>
            street:
          </ValueSpan>  <br/> 
          {user.address.street}
        </ProfileText>
        <ProfileText>
          <ValueSpan>
            suite:
          </ValueSpan>  <br/>  
          {user.address.suite}
        </ProfileText>
        <ProfileText>
          <ValueSpan>
            zip:
          </ValueSpan>  <br/>  
          {user.address.zipcode}
        </ProfileText>
        <ProfileText>
          <ValueSpan>
            city:
          </ValueSpan>  <br/>  
          {user.address.city}
        </ProfileText>
      </DetailContainerColumn>

      <DetailContainerColumn>
        <ProfileText style={{gridColumn: '1 / 3'}}>
          <ValueSpan>
            website:
          </ValueSpan>  <br/>  
          {user.website}
        </ProfileText>
        <ProfileText style={{gridColumn: '3 / 5'}}>
          <ValueSpan>
            company:
          </ValueSpan>  <br/>  
          {user.company.name}
        </ProfileText>
      </DetailContainerColumn>
      <PseudoElement/>
      <ProfileButton style={{width: '8rem'}}>Contact Me</ProfileButton>
    </GridContainer>
      
    
  )
  
}

export default Profile