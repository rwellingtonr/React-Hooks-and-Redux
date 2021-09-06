export const ADD_CORSE = "ADD_COUSE"

export const INITIAL_STATE = { data: ["Java", "Python", "ReactJS", "NodeJS"] }

export const INITIAL_STATE_USERS = {
  isPending: true,
  users: [],
  error: "",
}

//Paths
export const USER_DATA_URL = "https://jsonplaceholder.typicode.com/users"

//Fetching method
export const FETCH_INITIAL = "FETCH_INITIAL"
export const FETCH_OK = "FETCH_OK"
export const FETCH_ERROR = "FETCH_ERROR"
