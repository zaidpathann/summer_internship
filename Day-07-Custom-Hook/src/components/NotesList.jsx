function NotesList({ notes, deleteNote }) {

  return (

    <div className="zp-notes-container bg-gray-100 p-4 rounded-lg mt-4">

      {

        notes.length === 0 ?

          <h3>
            No Notes Added
          </h3>

          :

          notes.map((note) => (

            <div
              key={note.id}
              className="zp-note-card"
            >

              <p>
                {note.text}
              </p>

              <button
                onClick={() =>
                  deleteNote(note.id)
                }
              >
                Delete
              </button>

            </div>

          ))

      }

    </div>
  )
}

export default NotesList