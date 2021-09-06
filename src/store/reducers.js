import { ADD_CORSE, INITIAL_STATE } from "./constants"

export const courses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CORSE:
      // return the whole data, copy all data inside of the state and add all the information which comes from action data
      return { ...state, data: [...state.data, action.title] }
    default:
      return state
  }
}
