import React from 'react';

class MathQuestionScreen extends React.Component {
  // Inline-Style-Objekte
  styles = {
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
  };

  // Funktionen zum Handhaben der Antworten
  handleAnswer = (answer) => {
    console.log(`Gewählte Antwort: ${answer}`);
    // Logik zur Überprüfung der Antwort hinzufügen
  };

  // Funktionen zum Wechseln der Frage
  nextQuestion = () => {
    console.log("Nächste Frage");
    // Logik zum Wechseln zur nächsten Frage hinzufügen
  };

  // Funktion zum Anzeigen der Lösung
  showSolution = () => {
    console.log("Lösung anzeigen");
    // Logik zum Anzeigen der Lösung hinzufügen
  };

  render() {
    return (
      <div style={this.styles.screen}>
        <div style={this.styles.question}>Löse folgende Gleichung: x**2=144</div>
        <div style={this.styles.answers}>
          <button style={this.styles.button} onClick={() => this.handleAnswer(15)}>15</button>
          <button style={this.styles.button} onClick={() => this.handleAnswer(12)}>12</button>
          <button style={this.styles.button} onClick={() => this.handleAnswer(16)}>16</button>
        </div>
        <button style={this.styles.naechsteFrage} onClick={this.nextQuestion}>Nächste Frage</button>
        <button style={this.styles.Lösung} onClick={this.showSolution}>
          <div style={this.styles.LösungText}>Lösung anzeigen</div>
          </button>
        <div style={this.styles.answers}>
          <button style={this.styles.Mathebutton}>Mathematik</button>
          <button style={this.styles.Internetbutton}>Internettechnologien</button>
          <button style={this.styles.allgemeinWissenbutton}>allgemeines Wissen</button>
        </div>
      </div>
    );
  }
}

export default MathQuestionScreen;
