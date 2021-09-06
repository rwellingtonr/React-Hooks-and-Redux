import {
  ADD_CORSE,
  INITIAL_STATE,
  INITIAL_STATE_USERS,
  FETCH_INITIAL,
  FETCH_OK,
  FETCH_ERROR,
} from "./constants"

export const courses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CORSE:
      // return the whole data, copy all data inside of the state and add all the information which comes from action data
      return { ...state, data: [...state.data, action.title] }
    default:
      return state
  }
}

export const fetchUsers = (state = INITIAL_STATE_USERS, action) => {
  switch (action.type) {
    case FETCH_INITIAL:
      return { ...state, isPending: true }
    case FETCH_OK:
      return { ...state, users: action.payload, isPending: false }
    case FETCH_ERROR:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}
