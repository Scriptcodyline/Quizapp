onmessage = function(e) {
    console.log('Worker2 received:', e.data);
    const result = {
        result: e.data[0] * e.data[1],
        message: 'Worker2 hat die Berechnung abgeschlossen'y
    }
    postMessage(result);
  };