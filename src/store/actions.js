import { ADD_CORSE, FETCH_INITIAL, FETCH_OK, FETCH_ERROR } from "./constants"

export const addCourseToListAction = (courseToAdd) => {
  return { type: ADD_CORSE, title: courseToAdd }
}

export const fetchUsersAction = (dispatch) => {
  dispatch({ type: FETCH_INITIAL })
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((user) => dispatch({ type: FETCH_OK, payload: user }))
    .catch((e) => dispatch({ type: FETCH_ERROR, payload: e }))
}
