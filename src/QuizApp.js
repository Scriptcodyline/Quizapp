import React from 'react';
import { useNavigate } from 'react-router-dom'; // 'useNavigate' anstelle von 'useHistory' für React Router v6

const QuizApp = () => {
  const navigate = useNavigate(); // Verwendung des 'useNavigate' Hooks

  // Inline-Style-Objekte
  const styles = {
    quizApp: {
      backgroundColor: '#1e40af', // Dunkelblauer Hintergrund
      color: 'white',
      textAlign: 'center',
      padding: '50px'
    },
    header: {
      marginBottom: '20px'
    },
    buttonContainer: {
      marginTop: '20px'
    },
    button: {
      backgroundColor: '#f59e0b', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px 20px',
      margin: '10px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  };

  const handleMathClick = () => {
    console.log("Mathe gewählt");
    navigate('/math-question-screen'); // 'navigate' anstelle von 'history.push'
  };

  const handleTechClick = () => {
    console.log("Internettechnologien gewählt");
    // Implementiere entsprechende Logik
  };

  const handleGeneralKnowledgeClick = () => {
    console.log("Allgemeines Wissen gewählt");
    // Implementiere entsprechende Logik
  };

  return (
    <div style={styles.quizApp}>
      <h1 style={styles.header}>Quizapp</h1>
      <p>Wo willst du Fragen beantworten?</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleMathClick}>Mathematik</button>
        <button style={styles.button} onClick={handleTechClick}>Internettechnologien</button>
        <button style={styles.button} onClick={handleGeneralKnowledgeClick}>allgemeines Wissen</button>
      </div>
    </div>
  );
};

export default QuizApp;
