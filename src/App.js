import { useState } from "react";
import List from "./components/List";
import "./App.css";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");
    const handlePersonChange = (event) => {};

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
              {persons.map(person => (
                <List key={person.name} person={person}/>
              ))}
              {/* {persons.map(person => (
                <p key={person.name}>{person.name}</p>
              ))} */}
            </div>
            <div>debug: {newName}</div>

        </div>
    );
};

export default App;
