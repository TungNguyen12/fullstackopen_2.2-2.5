import List from "./List";

const Person = ({ personToShow }) => {
    return (
        <div>
            <h2>Name and phone number</h2>

            {personToShow.map((person) => (
                <List key={person.name} person={person} />
            ))}
        </div>
    );
};

export default Person;
