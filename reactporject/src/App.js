import "./App.css"

import routes from "./route/routes"
import { useRoutes } from "react-router-dom"

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
      {/* <Home></Home> */}
    </div>
  )
}

export default App
