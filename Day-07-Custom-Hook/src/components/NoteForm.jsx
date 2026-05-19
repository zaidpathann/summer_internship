import { useState } from "react"

function NoteForm({ addNote }) {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    addNote(input)

    setInput("")

  }

  return (

    <form
      className="zp-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter Note..."
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button type="submit">
        Add
      </button>

    </form>
  )
}

export default NoteForm