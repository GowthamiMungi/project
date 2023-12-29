// src/components/App.js
import React, { useState } from 'react';
import QuizHistory from './QuizHistory';
import Leaderboard from './Leaderboard';
import './App.css'; // Import your global CSS file
import './QuizHistory.css'; // Import QuizHistory component-specific CSS
import './Leaderboard.css'; // Import Leaderboard component-specific CSS

function App() {
  const [activeTab, setActiveTab] = useState('quizHistory'); // Initial tab

  const users = [
    { name: 'User 1', score: 100 },
    { name: 'User 2', score: 90 },
    { name: 'User 3', score: 80 },
    // Add more player data as needed
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      {/* <h1>Quiz App</h1> */}
      <nav className="navbar">
        <button onClick={() => handleTabChange('quizHistory')}>Quiz History</button>
        <button onClick={() => handleTabChange('leaderboard')}>Leaderboard</button>
      </nav>

      {activeTab === 'quizHistory' && <QuizHistory />}
      {activeTab === 'leaderboard' && <Leaderboard users={users} />}
    </div>
  );
}

export default App;
