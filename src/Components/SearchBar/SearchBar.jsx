import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState('');
  let navigate = useNavigate()

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search query here
    console.log('Search for:', query);
    navigate('product')
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row">
      <div className="flex items-center space-x-1">
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for products"
          className="px-4 py-2 w-full rounded-md border-2 border-gray-500 focus:border-gray-500 focus:ring-0 text-gray-900 placeholder-gray-500"
        />
        <GrSearch onClick={handleSubmit} className="text-3xl"/>
      </div>
    </form>
  );
}

export default SearchBar;