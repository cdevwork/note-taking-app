"use client";
import React, { useState, useEffect } from "react";
import NoteList from "./Components/NoteList";

const NoteApp = () => {
  const getStoredNotes = () => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const [notes, setNotes] = useState(getStoredNotes());
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote(""); 
    }
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = notes.filter((__, i) => i !== index);
    setNotes(updatedNotes);
  };
  
  const handleEditNote = (index: number, editedNote: string) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? editedNote : note
    );
    setNotes(updatedNotes);
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Note-Taking App</h1>
      <div className="mt-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="border p-2"
          placeholder="Add a new note"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Add Note
        </button>
      </div>

      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
    </div>
  );
};

export default NoteApp;
