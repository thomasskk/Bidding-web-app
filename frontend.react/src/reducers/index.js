import reducerFactory from './reducerFactory'

const handlers = {}

const actions = {
  SET_SEARCH_NAME: 'SET_SEARCH_NAME',
  SET_SEARCH_CATEGORY: 'SET_SEARCH_CATEGORY',
  SET_CATEGORY: 'SET_CATEGORY',
}

const initialState = {
  searchName: '',
  searchCategory: '9',
  category: [],
}

const changeState = (key) => {
  return (state, action) => {
    return {
      ...state,
      [key]: action.payload,
    }
  }
}

handlers[actions.SET_SEARCH_NAME] = changeState('searchName')
handlers[actions.SET_SEARCH_CATEGORY] = changeState('searchCategory')
handlers[actions.SET_CATEGORY] = changeState('category')

export default reducerFactory(initialState, handlers)
