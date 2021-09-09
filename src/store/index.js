import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import rootReducer from "./combineReducers"

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store
