import React from 'react';

// Funktionale Komponente
const MathQuestionScreen = () => {
  // Inline-Style-Objekte, gleich geblieben wie in deiner Klassenkomponente
   // Inline-Style-Objekte
   const styles = {
    screen: {
      backgroundColor: '#1e40af', // Dunkelblauer Hintergrund
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    question: {
      margin: '20px',
      fontSize: '2em',
    },
    answers: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: '135px',
    },
    button: {
      backgroundColor: '#f59e0b', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '15px 30px',
      margin: '10px',
      cursor: 'pointer',
      fontSize: '1em',
    },
    mainButton: {
      backgroundColor: '#dc2626', // Rote Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '15px 30px',
      margin: '20px',
      cursor: 'pointer',
      fontSize: '1em',
    },
    categoryButton: {
      backgroundColor: '#f59e0b', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px 20px',
      margin: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    naechsteFrage: {
      backgroundColor: '#dc2626', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '15px 30px',
      marginTop: '50px',
      cursor: 'pointer',
      fontSize: '1em',
    },
    Mathebutton: {
      backgroundColor: '#f59e0b', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px 20px',
      marginLeft: '15px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    Internetbutton: {
      backgroundColor: '#f59e0b', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px 20px',
      marginLeft: '55px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    allgemeinWissenbutton: {
      backgroundColor: '#f59e0b', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px 20px',
      marginLeft: '15px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    Lösung: {
      backgroundColor: '#1e40af', // Orangene Buttons
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      marginTop: '5px',
      marginBottom: '20px',
      cursor: 'pointer',
      fontSize: '1em',
    },
    LösungText: {
      color: '#dc2626', 
    },
    rights: {
        color: '#1e40af',
        },
  };

  // Funktionen zum Handhaben der Antworten, nächste Frage, und Lösung anzeigen
  const handleAnswer = (answer) => {
    console.log(`Gewählte Antwort: ${answer}`);
    // Logik zur Überprüfung der Antwort hinzufügen
  };

  const nextQuestion = () => {
    console.log("Nächste Frage");
    // Logik zum Wechseln zur nächsten Frage hinzufügen
  };

  const showSolution = () => {
    console.log("Lösung anzeigen");
    // Logik zum Anzeigen der Lösung hinzufügen
  };

  return (
    <div style={styles.screen}>
      <div style={styles.question}>Löse folgende Gleichung: x**2=144</div>
      <div style={styles.answers}>
        <button style={styles.button} onClick={() => handleAnswer(15)}>15</button>
        <button style={styles.button} onClick={() => handleAnswer(12)}>
            <div style={styles.rights}>12</div>
        </button>
        <button style={styles.button} onClick={() => handleAnswer(16)}>16</button>
      </div>
      <button style={styles.naechsteFrage} onClick={nextQuestion}>Nächste Frage</button>
      <button style={styles.Lösung} onClick={showSolution}>
        <div style={styles.LösungText}>Lösung anzeigen</div>
      </button>
      <div style={styles.answers}>
        <button style={styles.Mathebutton}>Mathematik</button>
        <button style={styles.Internetbutton}>Internettechnologien</button>
        <button style={styles.allgemeinWissenbutton}>allgemeines Wissen</button>
      </div>
    </div>
  );
};

export default MathQuestionScreen;
