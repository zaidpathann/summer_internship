import { useState, useEffect } from "react"

import axios from "axios"

import "./App.css"

function App() {

  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState("")

  const API =
    "https://YOUR_RENDER_URL"

  const fetchTasks = async () => {

    const response =
      await axios.get(

        `${API}/tasks`

      )

    setTasks(
      response.data
    )

  }

  useEffect(() => {

    fetchTasks()

  }, [])

  const addTask = async () => {

    if (!title) return

    await axios.post(

      `${API}/add-task`,

      {

        title

      }

    )

    setTitle("")

    fetchTasks()

  }

  const deleteTask = async (id) => {

    await axios.delete(

      `${API}/delete/${id}`

    )

    fetchTasks()

  }

  return (

    <div className="container">

      <h1>

        TaskFlow

      </h1>

      <div className="input-area">

        <input

          value={title}

          onChange={(e) =>

            setTitle(

              e.target.value

            )

          }

          placeholder="Enter Task"

        />

        <button

          onClick={addTask}

        >

          Add

        </button>

      </div>

      {

        tasks.map(

          (task) => (

            <div

              key={task.id}

              className="task"

            >

              <p>

                {task.title}

              </p>

              <button

                onClick={() =>

                  deleteTask(

                    task.id

                  )

                }

              >

                Delete

              </button>

            </div>

          )

        )

      }

    </div>

  )

}

export default App