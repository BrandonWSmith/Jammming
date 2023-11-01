import React, { useState, useCallback } from 'react';

function SearchBar(props) {
  const [input, setInput] = useState('');

  const handleInputChange = useCallback(
    event => {
      setInput(event.target.value);
    },
    []
  );

  const search = useCallback(
    () => {
      props.onSearch(input);
    },
    [props.onSearch, input]
  );

  return (
    <div>
      <h2>Search</h2>
      <input
        placeholder='Enter A Song Title'
        onChange={handleInputChange}
      />
      <button onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;