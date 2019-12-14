import { LOAD_SUCCESS, LOAD_FAIL } from "../constants"

export const getUsers = (data) => ({
  meta: {
    types: [LOAD_SUCCESS, LOAD_FAIL],
    async: true,
    request: {
      method: "POST",
      url: "/user/login",
      data,
    },
  },
})
