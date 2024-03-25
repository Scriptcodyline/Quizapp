import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';


const QuizApp = () => {
  const navigate = useNavigate(); // Verwendung des 'useNavigate' Hooks

  useEffect(() => {
    // Stellen Sie sicher, dass Sie den korrekten Pfad zur Worker-Datei angeben
    const worker1 = new Worker(`${process.env.PUBLIC_URL}/Webworker/worker1.js`);
    const worker2 = new Worker(`${process.env.PUBLIC_URL}/Webworker/worker2.js`);

    // Überprüfe, ob eine gespeicherte Antwort vorhanden ist, bevor du den Worker benachrichtigst
    const cachedWorker1Response = JSON.parse(localStorage.getItem('worker1Response'));
    if (cachedWorker1Response) {
      console.log('Cached message from Worker1:', cachedWorker1Response);
    } else {
      worker1.postMessage([10, 20]);
    }

    worker1.onmessage = function(e) {
      console.log('Message from Worker1:', e.data);
      // Speichere die Antwort im localStorage
      localStorage.setItem('worker1Response', e.data.stringify());
    };

    // Mache dasselbe für worker2
    const cachedWorker2Response = JSON.parse(localStorage.getItem('worker2Response'));

    if (cachedWorker2Response) {
      console.log('Cached message from Worker2:', cachedWorker2Response);
    } else {
      worker2.postMessage([30, 40]);
    }

    worker2.onmessage = function(e) {
      console.log('Message from Worker2:', e.data);
      // Speichere die Antwort im localStorage
      localStorage.setItem('worker2Response', e.data.stringify());
    };

    // Worker beenden, wenn sie nicht mehr benötigt werden
    return () => {
      worker1.terminate();
      worker2.terminate();
    };
  }, []);

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
