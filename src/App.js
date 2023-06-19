import { useState } from "react";
import Filter from "./components/Filter";
import Add from "./components/Add";
import Person from "./components/Person";

import "./App.css";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newPerson, setNewPerson] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [findPerson, setFindPerson] = useState("");

    const addList = (event) => {
        event.preventDefault();
        if (persons.find((person) => person.name === newPerson)) {
            alert(`${newPerson} is already added to the phone book`);
            return; //to stop running the next codes
        }

        const personObject = {
            name: newPerson,
            number: newNumber,
        };
        setPersons(persons.concat(personObject));
        setNewPerson("");
        setNewNumber("");
    };

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value);
    };
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFindPerson = (event) => {
        setFindPerson(event.target.value);
    };

    const personToShow = findPerson
        ? persons.filter((person) =>
              person.name
                  .split(" ")
                  .join(" ")
                  .toLowerCase()
                  .includes(findPerson.toLowerCase())
          )
        : persons;

    return (
        <>
            <Filter
                findPerson={findPerson}
                handleFindPerson={handleFindPerson}
            />
            <Add
                addList={addList}
                newPerson={newPerson}
                newNumber={newNumber}
                handlePersonChange={handlePersonChange}
                handleNumberChange={handleNumberChange}
            />

            <Person personToShow={personToShow} />
        </>
    );
};

export default App;
