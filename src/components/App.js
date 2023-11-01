import React, { useCallback, useState } from 'react';
import '../styles/app.css';
import SearchBar from './searchbar';
import SearchResults from './searchresults';
import Playlist from './playlist';
import Spotify from '../util/spotify';
import favicon from '../util/images/favicon.png'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback(
    input => {
      Spotify.search(input).then(setSearchResults);
    },
    []
  );

  const addTrack = useCallback(
    track => {
      if(playlistTracks.some(savedTrack => savedTrack.id === track.id))
        return;

      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback(
    track => {
      setPlaylistTracks(prevTracks => 
        prevTracks.filter(currentTrack => currentTrack.id !== track.id)
      );
    },
    []
  );

  const updatePlaylistName = useCallback(
    name => {
      setPlaylistName(name);
    },
    []
  );

  const savePlaylist = useCallback(
    () => {
      const trackUris = playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
      });
    },
    [playlistName, playlistTracks]
  );

  return (
    <div>
      <div className='heading'>
        <img className='logo' src={favicon} alt='Jammming logo'/>
        <h1>
          Ja<span className='mmm'>mmm</span>ing
        </h1>
      </div>
      <div className='content'>
        <div className='search'>
          <SearchBar onSearch={search} />
          <h2>Results</h2>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
        </div>
        <div className='playlist'>
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;