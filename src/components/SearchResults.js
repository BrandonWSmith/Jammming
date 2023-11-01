import React from 'react';
import Tracklist from './tracklist';

function SearchResults(props) {
  return (
    <div>
      <Tracklist
        track={props.searchResults}
        onAdd={props.onAdd}
      />
    </div>
  );
};

export default SearchResults;