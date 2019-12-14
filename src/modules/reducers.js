import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import { homeReducer as main } from "@features/home"

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    main,
  })

export const rootReducer = (history) => (state, action) => {
  // if (action.type === LOGOUT_SUCCESS) {
  // eslint-disable-next-line no-param-reassign
  // state = null
  // window.location.replace("/login")
  // }
  return appReducer(history)(state, action)
}
