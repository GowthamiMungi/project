


// src/components/QuizHistory.js
import React, { useState } from 'react';
import './QuizHistory.css';

const QuizHistory = () => {
  const [quizHistory, setQuizHistory] = useState([
    {
      id: 1,
      title: 'Quiz 1: HTML',
      score: '7/10',
      questions: 10,
      difficulty: 'Easy',
      answers: [
        { question: 'Q1', text: 'What does HTML stand for?', isCorrect: true },
        { question: 'Q2', text: 'Which tag is used for creating a hyperlink?', isCorrect: false },
        { question: 'Q3', text: 'In HTML, what does the "alt" attribute stand for?', isCorrect: false },
      ],
      submissionTime: '2024-01-09T12:30:00', // Add submission time as a string
    },
    {
      id: 2, // Ensure unique IDs
      title: 'Quiz 2: SQL',
      score: '10/10',
      questions: 10,
      difficulty: 'Easy',
      answers: [
        { question: 'Q1', text: 'What does SQL stand for?', isCorrect: true },
        { question: 'Q2', text: 'Which statement is used to insert new data in a database?', isCorrect: true },
        { question: 'Q3', text: 'What does the acronym "DDL" stand for in SQL?', isCorrect: true },
      ],
      submissionTime: '2024-01-09T14:45:00', // Add submission time as a string
    },
    {
      id: 2, // Ensure unique IDs
      title: 'Quiz 3: Docker',
      score: '9/10',
      questions: 10,
      difficulty: 'Easy',
      answers: [
        { question: 'Q1', text: 'What is Docker Engine?',  isCorrect: true },
        { question: 'Q2', text: 'What is Docker compose?', isCorrect: true },
        { question: 'Q3', text: 'Which file is used to build Docker Image?', isCorrect: false },
      ],
      submissionTime: '2024-01-09T14:45:00', // Add submission time as a string
    },


    // Add more quiz history data as needed
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <div className="quiz-history-container">
      <div className="quiz-history">
        <center>
          {/* <h2>Quiz History</h2> */}
        </center>
        <ul className="quiz-list">
          {quizHistory.map((quiz) => (
            <li
              key={quiz.id}
              className={`quiz-card ${selectedQuiz === quiz ? 'selected' : ''}`}
              onClick={() => handleQuizClick(quiz)}
            >
              <div className="quiz-header">
                <span>{quiz.title}</span>
              </div>
              <div className="quiz-details">
                <p>Score: {quiz.score}</p>
                <p>Questions: {quiz.questions}</p>
                <p>Difficulty: {quiz.difficulty}</p>
                <p>Time: {quiz.submissionTime}</p>
              </div>
              {selectedQuiz === quiz && (
                <div className="answers">
                  {quiz.answers.map((answer, index) => (
                    <div
                      key={index}
                      className={`answer ${answer.isCorrect ? 'correct' : 'wrong'}`}
                    >
                      {answer.question}: {answer.text}  <span class="with-space">&nbsp;</span>{answer.isCorrect ? 'Correct' : 'Wrong'}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizHistory;

