// App.js

import React from 'react';
import QuizHistory from './QuizHistory';
import './QuizHistory.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app">
      <QuizHistory />
      <div className="QuizHistory-styles"></div>
    </div>
  );
};

export default App;
