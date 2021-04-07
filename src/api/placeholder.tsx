import axios from 'axios'

export const getPlaceHolder = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}