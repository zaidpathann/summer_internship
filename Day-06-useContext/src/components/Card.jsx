import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"

function Card({ title }) {

  const { darkMode } = useContext(ThemeContext)

  return (

    <div className={

      darkMode

      ?

      "zp-card-dark"

      :

      "zp-card-light"

    }>

      <h2>
        {title}
      </h2>

      <p>
        Context API Sharing Data Globally
      </p>

    </div>
  )
}

export default Card