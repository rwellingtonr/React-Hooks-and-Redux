export const ADD_CORSE = "ADD_COUSE"

export const INITIAL_STATE = { data: ["Java", "Python", "ReactJS", "NodeJS"] }

export const INITIAL_STATE_USERS = {
  isPending: true,
  users: [],
  error: "",
}
export const INITIAL_STATE_TODO = {
  isPending: true,
  title: [],
  error: "",
}

//Paths
export const USER_DATA_URL = "https://jsonplaceholder.typicode.com/users"
export const TODO_DATA_URL = "http://jsonplaceholder.typicode.com/albums"

//Fetching method
export const FETCH_INITIAL = "FETCH_INITIAL"
export const FETCH_OK = "FETCH_OK"
export const FETCH_ERROR = "FETCH_ERROR"
