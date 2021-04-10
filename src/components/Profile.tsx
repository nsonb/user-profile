import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../type'

// axios
import { getSinglePlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

// component
import { ProfileText, ProfileHeader } from './common/typography'
import { GridContainer, DetailContainerColumn, DetailContainerRow } from './common/container'
import { Button } from './common/interactibles'

const Profile = () => {
  const { id } = useParams<{id:string}>()
  const [ user, setUser ] = useState<User>()

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
    <GridContainer >
      <Button>Back</Button>
      <DetailContainerRow>
          <ProfileHeader>{user.name}</ProfileHeader>
          <ProfileText style={{alignSelf: 'end'}}> @{user.username} </ProfileText>
      </DetailContainerRow>  

      <DetailContainerRow>
        <ProfileText>email: {user.email}</ProfileText>
        <ProfileText>phone: {user.phone}</ProfileText>
      </DetailContainerRow>

      <DetailContainerColumn>
        <ProfileText>Address</ProfileText>
        <ProfileText>
          {user.address.street} <br/>
          {user.address.suite}  <br/>
          {user.address.city} <br/>
          {user.address.zipcode}
        </ProfileText>
      </DetailContainerColumn>

      <DetailContainerRow>
        <ProfileText>website: {user.website}</ProfileText>
        <ProfileText>company: {user.company.name}</ProfileText>
      </DetailContainerRow>
    </GridContainer>
      
    
  )
  
}

export default Profile