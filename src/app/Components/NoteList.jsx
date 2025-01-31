import React, { useState } from "react";

const NoteList = ({ notes, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200"
            >
              <p className="text-gray-700 text-sm md:text-base break-words leading-relaxed max-h-32 overflow-auto">
                {note}
              </p>
              <div className="flex justify-end mt-3 space-x-2">
                <button
                  onClick={() => {
                    const editedNote = prompt("Edit note", note);
                    if (editedNote !== null) {
                      onEdit(index, editedNote);
                    }
                  }}
                  className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white px-4 py-2 text-sm rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No matching notes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
