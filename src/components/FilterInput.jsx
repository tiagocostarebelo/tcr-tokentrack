const FilterInput = ({filter, onFilterChange}) => {
    return (
        <div className="filter">
            <input type="text" value={filter} placeholder="Filter coin by name or symbol" onChange={(e) => onFilterChange(e.target.value)}/>
        </div>
    );
};

export default FilterInput;