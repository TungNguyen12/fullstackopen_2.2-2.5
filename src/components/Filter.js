const Filter = ({ findPerson, handleFindPerson }) => {
    return (
        <>
            <h2>Phone book</h2>
            <div>
                filter shown with{" "}
                <input value={findPerson} onChange={handleFindPerson} />
            </div>
        </>
    );
};

export default Filter;
