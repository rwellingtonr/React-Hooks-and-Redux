import * as data from "./constants"

export const addCourseToListAction = (courseToAdd) => {
  return { type: data.ADD_CORSE, title: courseToAdd }
}

export const fetchUsersAction = (dispatch) => {
  dispatch({ type: data.FETCH_INITIAL })
  fetch(data.USER_DATA_URL)
    .then((response) => response.json())
    .then((user) => dispatch({ type: data.FETCH_OK, payload: user }))
    .catch((e) => dispatch({ type: data.FETCH_ERROR, payload: e }))
}
