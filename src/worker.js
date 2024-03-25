onmessage = function(e) {
    const [num1, num2] = e.data;
    const result = num1 * num2;
    postMessage(result);
  };