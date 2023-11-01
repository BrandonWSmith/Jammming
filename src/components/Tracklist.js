import React from 'react';
import Track from './Track';
import '../styles/Tracklist.css';

function Tracklist(props) {
  return (
    <div className='tracklist'>
      {props.track.map(track => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isAdded={props.isAdded}
          />
        );
      })}
    </div>
  );
};

export default Tracklist;