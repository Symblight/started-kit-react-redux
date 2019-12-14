import { combineReducers } from "redux"

import { reducer as mainReducer } from "./home"

export const homeReducer = combineReducers({
  mainReducer,
})
