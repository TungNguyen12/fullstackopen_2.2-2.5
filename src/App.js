import React from "react";
import Note from "./components/Note";

import "./App.css";

const Course = ({ course }) => {
    const Total = course.parts.reduce((acc, cur) => acc + cur.exercises, 0);
    console.log(Total);
    
    const List = () => {
        return course.parts.map((part) => (
            <p key={part.id}>
                {part.name}, {part.exercises}
            </p>
        ));
    };

    return (
        <>
            <h1>{course.name}</h1>
            <List />
            <p>Redux {Total - course.parts[0].exercises * 2}</p>
            <strong>Total is {Total} exercises</strong>
        </>
    );
};

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;
