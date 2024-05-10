import Home from "../AllPages/Home"
import { Navigate } from "react-router-dom"

import LogIn from "../AllPages/LogIn"

import ECommerce from "../AllPages/ECommerce"

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
  },
  {
    path: "/ecommerce",
    element: <ECommerce></ECommerce>
  },
  
]

export default routes
