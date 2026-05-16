import { useEffect, useState } from "react"
import axios from "axios"

import UserCard from "./components/UserCard"

import "./App.css"

function App() {

  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")

  const [search, setSearch] = useState("")

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        )

        setUsers(response.data)

      }
      catch (err) {

        setError("Failed To Fetch Users")

      }
      finally {

        setLoading(false)

      }
    }

    fetchUsers()

  }, [])

  const filteredUsers = users.filter((user) =>

    user.name.toLowerCase().includes(search.toLowerCase())

  )

  return (

    <div className="zp-container">

      <h1 className="zp-heading">
        API Integration Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search Users..."
        className="zp-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {

        loading ?

          <h2 className="zp-status">
            Loading Users...
          </h2>

          :

          error ?

            <h2 className="zp-error">
              {error}
            </h2>

            :

            <div className="zp-grid">

              {

                filteredUsers.map((user) => (

                  <UserCard
                    key={user.id}
                    user={user}
                  />

                ))

              }

            </div>

      }

    </div>
  )
}

export default App

