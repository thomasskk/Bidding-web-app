import { createStore } from 'redux'
import reducersFactory from '../reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(reducersFactory, devToolsEnhancer({}))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
