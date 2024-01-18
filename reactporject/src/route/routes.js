import Home from "../AllPages/Home"
import { Navigate } from "react-router-dom"

import LogIn from "../AllPages/LogIn"

const routes = [
  {
    path: "/login",
    element: <LogIn></LogIn>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <Navigate to="/home" />
  }
]

export default routes
