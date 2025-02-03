import React, { useState } from "react";

const NoteList = ({ notes, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6 max-w-6xl mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full p-3 pl-10 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="absolute left-3 top-4 w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              <p className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-h-32 overflow-auto">
                {note}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const editedNote = prompt("Edit note", note);
                    if (editedNote !== null) {
                      onEdit(index, editedNote);
                    }
                  }}
                  className="flex-1 bg-blue-500 text-white py-2 px-3 text-sm rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(index)}
                  className="flex-1 bg-red-500 text-white py-2 px-3 text-sm rounded-lg hover:bg-red-600 transition duration-200 ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center text-lg">
            No matching notes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
