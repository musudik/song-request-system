// src/components/SongRequestForm.js
import React, { useState } from 'react';

const SongRequestForm = ({ addSongRequest }) => {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSongRequest({ name, song, genre });
    setName('');
    setSong('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} className="song-request-form">
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Song Title:</label>
        <input 
          type="text" 
          value={song} 
          onChange={(e) => setSong(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Genre:</label>
        <select 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
          required
        >
          <option value="">Select Genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="country">Country</option>
          <option value="hiphop">Hip-Hop</option>
          <option value="classical">Classical</option>
        </select>
      </div>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default SongRequestForm;
