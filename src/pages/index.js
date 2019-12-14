import React from "react"
import { renderRoutes } from "react-router-config"

import { HomePage } from "./Home"

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
]

export const Routes = () => <>{renderRoutes(routes)}</>
