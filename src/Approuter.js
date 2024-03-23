// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 'Routes' statt 'Switch'
import QuizApp from './QuizApp';
import MathQuestionScreen from './MathQuestionScreen';

function AppRouter() {
  return (
    <Router>
      <Routes> {/* 'Routes' statt 'Switch' */}
        <Route exact path="/" element={<QuizApp />} /> {/* 'element' statt 'component', JSX statt Komponentenreferenz */}
        <Route path="/math-question-screen" element={<MathQuestionScreen />} />
        {/* Weitere Routen hier einfügen */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
