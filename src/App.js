import React from "react";
import { useState } from "react";
import Note from "./components/Note";
//dasfsdfsdaf

import "./App.css";

// const App = () => {
//     const courses = [
//         {
//             name: "Half Stack application development",
//             id: 1,
//             parts: [
//                 {
//                     name: "Fundamentals of React",
//                     exercises: 10,
//                     id: 1,
//                 },
//                 {
//                     name: "Using props to pass data",
//                     exercises: 7,
//                     id: 2,
//                 },
//                 {
//                     name: "State of a component",
//                     exercises: 14,
//                     id: 3,
//                 },
//                 {
//                     name: "Redux",
//                     exercises: 11,
//                     id: 4,
//                 },
//             ],
//         },
//         {
//             name: "Node.js",
//             id: 2,
//             parts: [
//                 {
//                     name: "Routing",
//                     exercises: 3,
//                     id: 1,
//                 },
//                 {
//                     name: "Middlewares",
//                     exercises: 7,
//                     id: 2,
//                 },
//             ],
//         },
//     ];

//     return <Courses courses={courses} />;
// };

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);

    const [newNote, setNewNote] = useState("a new note...");

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: notes.length + 1,
        };
        setNotes(notes.concat(noteObject));
        setNewNote("");
    };

    const handleNoteChange = (e) => {
        console.log(e.target.value);
        setNewNote(e.target.value);
    };

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>
        </div>
    );
};

export default App;
