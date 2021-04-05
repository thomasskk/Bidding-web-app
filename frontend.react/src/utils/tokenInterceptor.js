import axios from 'axios'

const tokenInterceptor = () => {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  })
}

export default tokenInterceptor
