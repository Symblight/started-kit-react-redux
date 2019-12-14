import React, { useEffect } from "react"
import PropTypes from "prop-types"

import _ from "lodash"

import { useDispatch, useSelector } from "react-redux"

import { getUsers } from "@features/home"

import { Wrapper } from "./styled"

export const HomePage = () => {
  const homeStore = useSelector((state) => state.main.mainReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <Wrapper>
      <h1>Home</h1>
      <div>
        {homeStore.users.map((user, i) => (
          <div key={_.uniqBy("user-")}>{user.name}</div>
        ))}
      </div>
    </Wrapper>
  )
}

HomePage.propTypes = {}
