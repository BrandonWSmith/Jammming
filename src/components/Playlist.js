import React, {useCallback} from 'react';
import Tracklist from './Tracklist';

function Playlist(props) {
  const handleNameChange = useCallback(
    event => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div>
      <h2>Playlist</h2>
      <input onChange={handleNameChange} placeholder='Name Your Playlist' />
      <button onClick={props.onSave}>
        Save To Spotify
      </button>
      <h2>Tracks</h2>
      <Tracklist
        track={props.playlistTracks}
        onRemove={props.onRemove}
        isAdded={true}
      />
    </div>
  );
};

export default Playlist;