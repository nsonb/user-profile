import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { User } from '../type'

// axios
import { getSinglePlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

// component
import { Heading1, Heading2, Heading3, Emphasis, Quote } from './common/typography'
import { GridContainer, DetailContainer } from './common/container'

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
      <Heading1 style={{gridRow: '1 / -1', gridColumn: '1 / 3'}}>
        <Emphasis>
          {`< ${user.name} >`}
        </Emphasis>
      </Heading1>
      <DetailContainer>
        <Heading3>username</Heading3>
        <Quote> {user.username}</Quote>
      </DetailContainer>
      <DetailContainer>
        <Heading3>email</Heading3>
        <Quote>{user.email}</Quote>
      </DetailContainer>
      <DetailContainer>
        <Heading3>phone</Heading3>
        <Quote>{user.phone}</Quote>
      </DetailContainer>
      <DetailContainer>
        <Heading3>company</Heading3>
        <Quote>{user.company.name}</Quote>
      </DetailContainer>
      <DetailContainer>
        <Heading3>website</Heading3>
        <Quote>{ user.website}</Quote>
      </DetailContainer>
      <DetailContainer>
        <Heading3>address</Heading3>
        <Quote> { user.address.street} { user.address.suite } { user.address.city }  { user.address.zipcode}</Quote>
      </DetailContainer>
    </GridContainer>
      
    
  )
  
}

export default Profile