import reducerFactory from './reducerFactory'

const handlers = {}

const actions = {
  SET_SEARCH_NAME: 'SET_SEARCH_NAME',
  SET_SEARCH_CATEGORY: 'SET_SEARCH_CATEGORY',
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
}

const initialState = {
  searchName: '',
  searchCategory: 'All',
  bookmark: [],
}

const changeState = (key) => {
  return (state, action) => {
    return {
      ...state,
      [key]: action.payload,
    }
  }
}

const addState = (key) => {
  return (state, action) => {
    return {
      ...state,
      [key]: [...state.bookmark, action.payload],
    }
  }
}

const filterState = (key) => {
  return (state, action) => {
    return {
      ...state,
      [key]: state.bookmark.filter(i => i !== action.payload),
    }
  }
}


handlers[actions.SET_SEARCH_NAME] = changeState('searchName')
handlers[actions.SET_SEARCH_CATEGORY] = changeState('searchCategory')
handlers[actions.ADD_BOOKMARK] = addState('bookmark')
handlers[actions.REMOVE_BOOKMARK] = filterState('bookmark')

export default reducerFactory(initialState, handlers)
