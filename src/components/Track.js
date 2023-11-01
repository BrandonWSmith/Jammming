import React, { useCallback } from 'react';
import '../styles/Track.css';

function Track(props) {
  const addTrack = useCallback(
    event => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    event => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const action = () => {
    if(props.isAdded) {
      return (
        <button onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className='track'>
      <div>
        <h3>{props.track.name}</h3>
        <p className='artist'>{props.track.artist}</p>
        <p className='album'>{props.track.album}</p>
      </div>
      <div>
        {action()}
      </div>
    </div>
  );
};

export default Track;