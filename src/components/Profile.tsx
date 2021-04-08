import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { User } from '../type'

// axios
import { getSinglePlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

// component
import { Heading1 } from './common/typography'

const Profile = () => {
  const { id } = useParams<{id:string}>()
  const [ user, setUser ] = useState<User>()

  useEffect(() => {
    getSinglePlaceHolder(id)
      .then((res: AxiosResponse) => {
        const resData= JSON.parse(JSON.stringify(res.data)) as User
        setUser(resData)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }, [])

  if (user === undefined) {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <div>
      <Heading1>
        {user.name}
      </Heading1>
      
    </div>
  )
  
}

export default Profile