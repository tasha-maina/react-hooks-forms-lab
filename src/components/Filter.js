function Filter({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}              // use 'search' here
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
