import { useState } from "react";
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar({ data, onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    search(event.target.value);
  };

  const search = (text) => {
    const results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase())
    );
    onSearch(results);
  };

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          {/* search icon from fortawesome */}
            <FontAwesomeIcon icon={faSearchengin} />
        </button>
      </span>
      <input
        type="search"
        className="py-2 pl-10 text-sm w-1/2 rounded-md border border-gray-300 focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Search blog posts..."
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
