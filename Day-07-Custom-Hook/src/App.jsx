import useNotes from "./hooks/useNotes"

import NoteForm from "./components/NoteForm"
import NotesList from "./components/NotesList"

import "./App.css"

function App() {

  const {
    notes,
    addNote,
    deleteNote
  } = useNotes()

  return (

    <div className="zp-container">

      <div className="zp-card">

        <h1>
          Notes Manager
        </h1>

        <p className="zp-subtitle">
          React Custom Hook Project
        </p>

        <NoteForm addNote={addNote} />

        <NotesList
          notes={notes}
          deleteNote={deleteNote}
        />

      </div>

    </div>
  )
}

export default App