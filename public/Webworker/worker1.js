// worker1.js
onmessage = function(e) {
    console.log('Worker1 received:', e.data);
    const result ={
        result: e.data[0] + e.data[1],
        message: 'Worker1 hat die Berechnung abgeschlossen'
    }
    postMessage(result);
  };