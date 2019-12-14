import React from "react"

import { AlertProvider } from "@tasky/components"

import { Routes } from "../pages"
import { GlobalStyles } from "./global-styled"

import "antd/dist/antd.css"

export const App = () => (
  <>
    <GlobalStyles />
    <AlertProvider>
      <Routes />
    </AlertProvider>
  </>
)
