
import React, { useState } from 'react';
import QuizHistory from './QuizHistory';
import './App.css'; // Import your global CSS file
import './QuizHistory.css'; // Import QuizHistory component-specific CSS


function App() {
  const [activeTab, setActiveTab] = useState('quizHistory'); // Initial tab


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      {/* <h1>Quiz App</h1> */}
      <nav className="navbar">
        <button onClick={() => handleTabChange('quizHistory')}>Quiz History</button>
      </nav>

      {activeTab === 'quizHistory' && <QuizHistory />}
      
    </div>


  );
}


export default App;

