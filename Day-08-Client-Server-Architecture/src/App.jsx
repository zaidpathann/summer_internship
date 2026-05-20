import { useState } from "react"

import axios from "axios"

import "./App.css"

function App() {

  const [data, setData] = useState(null)

  const [loading, setLoading] = useState(false)

  const fetchServerData = async () => {

    try {

      setLoading(true)

      const response = await axios.get(
        "http://localhost:5000/api/data"
      )

      console.log(response.data)

      setData(response.data)

    }
    catch (error) {

      console.log(error)

      alert("Server Connection Failed")

    }
    finally {

      setLoading(false)

    }
  }

  return (

    <div className="zp-container">

      <div className="zp-card">

        <h1>
          Client Server Architecture
        </h1>

        <p>
          React Client ↔ Express Server
        </p>

        <button
          type="button"
          onClick={fetchServerData}
        >

          Fetch Server Data

        </button>

        {

          loading &&

          <h3>
            Loading...
          </h3>

        }

        {

          data &&

          <div className="zp-data-box">

            <h2>
              {data.message}
            </h2>

            <p>
              Status: {data.status}
            </p>

            <p>
              Backend: {data.framework}
            </p>

          </div>

        }

      </div>

    </div>
  )
}

export default App