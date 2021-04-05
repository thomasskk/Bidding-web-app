import { createStore } from 'redux'
import reducerFactory from '../reducers'

const store = createStore(
  reducerFactory,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
