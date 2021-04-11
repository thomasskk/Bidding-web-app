import { PayloadAction } from '@reduxjs/toolkit'
import {InitialState} from './index'
const reducersFactory = (initialState:InitialState, handlers:any) => {
  
  return (state = initialState, action: PayloadAction<any>) => {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}

export default reducersFactory