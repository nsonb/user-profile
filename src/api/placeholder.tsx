import axios from 'axios'

export const getPlaceHolder = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const getSinglePlaceHolder = (id: string) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}