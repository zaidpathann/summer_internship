import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"

function Navbar() {

  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (

    <nav className={

      darkMode

      ?

      "zp-navbar-dark"

      :

      "zp-navbar-light"

    }>

      <h2>
        useContext Demo
      </h2>

      <button
        onClick={toggleTheme}
      >

        {

          darkMode

          ?

          "Light Mode"

          :

          "Dark Mode"

        }

      </button>

    </nav>
  )
}

export default Navbar