import { createContext, useState } from 'react'
import { User } from '../type'
import { getPlaceHolder } from '../api/placeholder'
import { AxiosError, AxiosResponse } from 'axios'

interface props {
  children: React.ReactNode
}

type ContextType = {
  user?: User[],
  getUser?: () => void
}

export const UserContext = createContext<ContextType>({})
export const UserContextProvider = (props: props) => {
  const [ user, setUser ] = useState<User[]>()

  const getUser = () => {
    getPlaceHolder()
    .then((res: AxiosResponse) => {
      console.log(res.data)
      const resData= JSON.parse(JSON.stringify(res.data)) as User[]
        setUser(resData)
    })
    .catch((err: AxiosError) => {
      console.log(err)
    })
  }

  return (
    <UserContext.Provider value = {{user , getUser}}>
       {props.children}
    </UserContext.Provider>
  )
}
