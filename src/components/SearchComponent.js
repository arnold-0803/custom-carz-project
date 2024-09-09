import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchComponent() {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSumit = (e) => {
    e.preventDefault();
    if(query.trim()){
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="search-bar-wrapper">
      <form onClick={handleSumit}>
        <input 
          type="text"
          placeholder='Search products'
          value={query}
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchComponent;
