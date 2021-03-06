import axios from 'axios'
import { useDispatch } from 'react-redux'

export default function setAuth(): void {
  axios(process.env.REACT_APP_API_URL + 'tokenValidation')
  const dispatch = useDispatch()
  localStorage.getItem('token') &&
    dispatch({
      type: 'AUTHENTICATED',
      payload: true,
    })
}
