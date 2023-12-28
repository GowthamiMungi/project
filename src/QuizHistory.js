// QuizHistory.js
// import React from 'react';
import './QuizHistory.css';
// src/components/QuizHistory.js
import React, { useState } from 'react';

function QuizHistory() {
  // Dummy quiz history data
  const [quizHistory, setQuizHistory] = useState([
    {
      id: 1,
      title: 'Quiz 1: HTML Basics',
      score: '8/10',
      questions: 10,
      difficulty: 'Easy',
      date: 'January 10, 2023',
    },
    {
      id: 2,
      title: 'Quiz 2: CSS Styling',
      score: '9/10',
      questions: 15,
      difficulty: 'Medium',
      date: 'February 5, 2023',
    },
    // Add more quiz history data as needed
  ]);

  return (
    <div className="quiz-history-container">
      <div className="quiz-history">
        {quizHistory.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <div className="quiz-title">{quiz.title}</div>
            <div className="quiz-details">
              <p>Score: {quiz.score}</p>
              <p>Questions: {quiz.questions}</p>
              <p>Difficulty: {quiz.difficulty}</p>
              <p>Date: {quiz.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizHistory;
