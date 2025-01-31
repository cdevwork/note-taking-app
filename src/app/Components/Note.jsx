import React, { useState } from "react";

const Note = ({ note, index, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEdit = () => {
    onEdit(index, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="mt-2 p-4 border-b">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
            className="border p-2"
          />
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white p-2 ml-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>{note}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white p-2 mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(index)}
            className="bg-red-500 text-white p-2"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
