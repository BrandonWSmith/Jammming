import React, { useState, useCallback } from 'react';
import '../styles/landing.css';
import Spotify from '../util/spotify';
import favicon from '../util/images/favicon.png';

function Landing() {
  const [input, setInput] = useState('');

  const handleInputChange = useCallback(
    event => {
      setInput(event.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      const clientId = encodeURIComponent(input);
      Spotify.getAccessToken(clientId);
  },
  [input]
);


  return (
    <div>
        <div className='heading'>
          <img className='logo' src={favicon} alt='Jammming logo'/>
          <h1>
            Ja<span className='mmm'>mmm</span>ing
          </h1>
        </div>
        <div className='form'>
          <h2>This application requires a Spotify Client ID</h2>
          <p>Please Enter Your Spotify Client ID below. If you need a Spotify Client ID or are unsure of your client ID, please visit the <a href='https://developer.spotify.com/documentation/web-api/concepts/apps' target='_blank'>Spotify Developers Portal</a>.</p>
          <p className='note'>(<b>Note:</b> This app does not save any of your information and is not connected to any kind of database. Your Spotify credentials and client ID are safe and cannot be seen or used by anyone else.)</p>
          <form>
            <input
              placeholder='Enter your Spotify Client ID'
              onChange={handleInputChange}
            />
            <button onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
  );
}

export default Landing;