const Add = ({ addList, newPerson, newNumber, handlePersonChange, handleNumberChange}) => {
    return (
        <>
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
        </>
    )
}

export default Add;