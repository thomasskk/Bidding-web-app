import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'
import reducersFactory from './reducersFactory'

const handlers: any = {}

const actions = {
  SET_SEARCH_NAME: 'SET_SEARCH_NAME',
  SET_SEARCH_CATEGORY: 'SET_SEARCH_CATEGORY',
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  AUTHENTICATED: 'AUTHENTICATED',
}

export interface InitialState {
  searchName: string
  searchCategory: string
  bookmark: any[]
  authenticated: boolean
}

const initialState: InitialState = {
  searchName: '',
  searchCategory: 'All',
  bookmark: [],
  authenticated: false,
}

const reducers = (key: string, effect: string) => {
  return (state: RootState, action: PayloadAction<any>) => {
    switch (effect) {
      case 'CHANGE':
        return {
          ...state,
          [key]: action.payload,
        }
      case 'ADD':
        return {
          ...state,
          [key]: [...state[key], action.payload],
        }
      case 'FILTER':
        console.log(key)
        return {
          ...state,
          [key]: state[key].filter((i: any[]) => i !== action.payload),
        }
    }
  }
}

handlers[actions.SET_SEARCH_NAME] = reducers('searchName', 'CHANGE')
handlers[actions.SET_SEARCH_CATEGORY] = reducers('searchCategory', 'CHANGE')
handlers[actions.ADD_BOOKMARK] = reducers('bookmark', 'ADD')
handlers[actions.REMOVE_BOOKMARK] = reducers('bookmark', 'FILTER')
handlers[actions.AUTHENTICATED] = reducers('authenticated', 'CHANGE')

export default reducersFactory(initialState, handlers)
