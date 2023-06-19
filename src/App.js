import { useState } from "react";
import List from "./components/List";
import "./App.css";
import { getAllByLabelText, queryAllByAttribute } from "@testing-library/react";

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
            <h2>Phonebook</h2>
            <div>
                filter shown with{" "}
                <input value={findPerson} onChange={handleFindPerson} />
            </div>

            <h2>Add a new</h2>
            <form onSubmit={addList}>
                <div>
                    Name:{" "}
                    <input value={newPerson} onChange={handlePersonChange} />
                </div>
                <div>
                    Number:{" "}
                    <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Name and phone number</h2>
            <div>
                {personToShow.map((person) => (
                    <List key={person.name} person={person} />
                ))}
            </div>
            <div>debug: {newPerson}</div>
        </>
    );
};

export default App;
