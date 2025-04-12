// src/components/SearchBar.jsx
function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by name or description..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-bar"
      />
    );
  }
  
  export default SearchBar;