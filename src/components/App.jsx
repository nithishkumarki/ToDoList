import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(dId) {
    setNotes((prev) => prev.filter((i, index) => index !== dId));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((i, index) => (
        <Note
          key={index}
          id={index}
          title={i.title}
          content={i.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
