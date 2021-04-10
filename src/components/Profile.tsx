import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { User } from '../type'

// axios
import { getSinglePlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

// component
import { Heading1 } from './common/typography'
import { GridContainer } from './common/container'

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
    <div>
      <GridContainer>
        <Heading1>
          {user.name}
        </Heading1>
        { user.username} {user.email} {user.phone} {user.company.name} { user.website} 
        { user.address.street} { user.address.suite } { user.address.city }  { user.address.zipcode}
      </GridContainer>
      
    </div>
  )
  
}

export default Profile