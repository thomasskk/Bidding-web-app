import axios from 'axios'
import { useDispatch } from 'react-redux'

const tokenInterceptor = () => {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  })
}

const InvalidTokenInterceptor = () => {
  const dispatch = useDispatch()
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        dispatch({
          type: 'AUTHENTICATED',
          payload: false,
        })
      }
      return error
    }
  )
}

export { tokenInterceptor, InvalidTokenInterceptor }
