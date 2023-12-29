// src/components/Leaderboard.js
import React from 'react';
import './Leaderboard.css';
const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2> 
      <ul className="leaderboard-list">
        <li className="leaderboard-item header">
          <span className="player-name">Names</span>
          <span className="player-score">Score</span>
        </li>
        {users.map((user, index) => (
          <li key={index} className="leaderboard-item">
            <span className="player-name">{user.name}</span>
            <span className="player-score">{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

