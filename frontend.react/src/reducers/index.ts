import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

const actions = {
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  AUTHENTICATED: 'AUTHENTICATED',
  ETH_USD: 'ETH_USD',
}

type Handler = Partial<{
  [action: string]: (
    state: RootState,
    action: PayloadAction<any>
  ) => Partial<InitialState>
}>

const handlers: Handler = {}

export interface InitialState {
  bookmark: any[]
  authenticated: boolean
  ETHUSD: number
}

const initialState: InitialState = {
  bookmark: [],
  authenticated: false,
  ETHUSD: 0,
}

const reducers = (key: string, effect: string) => {
  return (state: RootState, action: PayloadAction<any>): Partial<InitialState> => {
    const effectSwitch: Record<string, () => any> = {
      CHANGE: () => {
        return {
          ...state,
          [key]: action.payload,
        }
      },
      ADD: () => {
        return {
          ...state,
          [key]: [...state[key], action.payload] || null,
        }
      },
      FILTER: () => {
        return {
          ...state,
          [key]: state[key].filter((i: any[]) => i !== action.payload) || null,
        }
      },
    }
    return effectSwitch[effect]()
  }
}

handlers[actions.ADD_BOOKMARK] = reducers('bookmark', 'ADD')
handlers[actions.REMOVE_BOOKMARK] = reducers('bookmark', 'FILTER')
handlers[actions.AUTHENTICATED] = reducers('authenticated', 'CHANGE')
handlers[actions.ETH_USD] = reducers('ETHUSD', 'CHANGE')

const reducersFactory = (initialState: InitialState, handlers: Handler) => {
  return (state = initialState, action: PayloadAction<any>): any => {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}

export default reducersFactory(initialState, handlers)
