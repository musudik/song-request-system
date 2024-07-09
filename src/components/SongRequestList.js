// src/components/SongRequestList.js
import React from 'react';

const SongRequestList = ({ requests }) => {
  return (
    <div className="song-request-list">
      <h2>Song Requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>
            {request.name} requested "{request.song}" ({request.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongRequestList;
