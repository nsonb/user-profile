import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../type'

// axios
import { getSinglePlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

// component
import { Heading2, Emphasis, Quote, SubHeading} from './common/typography'
import { GridContainer, DetailContainerColumn, DetailContainerRow } from './common/container'

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
      <DetailContainerRow>
          <Heading2>{user.name} </Heading2>
          <Emphasis style={{fontSize: '6rem'}}>@{user.username}</Emphasis>
      </DetailContainerRow>  

      <DetailContainerColumn>
        {user.email} <br/>
        {user.phone}
      </DetailContainerColumn>

      <div>
        {user.address.street} <br/>
        {user.address.suite}  <br/>
        {user.address.city} <br/>
        {user.address.zipcode}
      </div>

      <div>
        {user.website} <br/>
        {user.company.name}
      </div>
    </GridContainer>
      
    
  )
  
}

export default Profile