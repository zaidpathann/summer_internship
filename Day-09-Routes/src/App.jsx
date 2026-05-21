import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import RoutesPage from "./RoutesPage"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/:operation/:num1/:num2"
          element={<RoutesPage />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App