import * as constant from "./constants"

export const courses = (state = constant.INITIAL_STATE, action) => {
  switch (action.type) {
    case constant.ADD_CORSE:
      // return the whole data, copy all data inside of the state and add all the information which comes from action data
      return { ...state, data: [...state.data, action.title] }
    default:
      return state
  }
}

export const fetchData = (state = constant.INITIAL_STATE_USERS, action) => {
  switch (action.type) {
    case constant.FETCH_INITIAL:
      return { ...state, isPending: true }
    case constant.FETCH_OK:
      return { ...state, users: action.payload, isPending: false }
    case constant.FETCH_ERROR:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

export const todoDataList = (state = constant.INITIAL_STATE_TODO, action) => {
  switch (action.type) {
    case constant.FETCH_INITIAL:
      return { ...state, isPending: true }
    case constant.FETCH_OK:
      return { ...state, title: action.payload, isPending: false }
    case constant.FETCH_ERROR:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}
