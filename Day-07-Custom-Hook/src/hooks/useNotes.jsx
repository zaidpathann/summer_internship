import { useState } from "react"

function useNotes() {

  const [notes, setNotes] = useState([])

  const addNote = (text) => {

    if(text.trim() === ""){
      return
    }

    const newNote = {
      id: Date.now(),
      text
    }

    setNotes((prev) => [...prev, newNote])

  }

  const deleteNote = (id) => {

    setNotes((prev) =>

      prev.filter((note) => note.id !== id)

    )

  }

  return {
    notes,
    addNote,
    deleteNote
  }
}

export default useNotes