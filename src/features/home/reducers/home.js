import { LOAD_SUCCESS, LOAD_FAIL } from "../constants"

const initialState = {
  users: [],
  error: true,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        users: [],
        error: false,
      }
    }
    case LOAD_FAIL: {
      return {
        ...state,
        error: true,
      }
    }
    default:
      return state
  }
}
