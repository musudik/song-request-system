// src/App.js
import React, { useState } from 'react';
import SongRequestForm from './components/SongRequestForm';
import SongRequestList from './components/SongRequestList';
import './App.css';

const App = () => {
  const [requests, setRequests] = useState([]);

  const addSongRequest = (request) => {
    setRequests([...requests, request]);
  };

  return (
    <div className="app">
      <h1>Karaoke Song Request System</h1>
      <SongRequestForm addSongRequest={addSongRequest} />
      <SongRequestList requests={requests} />
    </div>
  );
};

export default App;
