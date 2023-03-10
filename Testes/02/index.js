function fibonacci(num) {
    let fibonacciLista = [0, 1];
    while (fibonacciLista[fibonacciLista.length - 1] < num) {
      fibonacciLista.push(fibonacciLista[fibonacciLista.length - 1] + fibonacciLista[fibonacciLista.length - 2]);
    }
    return fibonacciLista;
  }


  function check(num) {
    /*
     * Verifica se o número informado pertence ou não à sequência de Fibonacci
     */
    const fibonacciLista = fibonacci(num);
    if (fibonacciLista.includes(num)) {
      return `${num} pertence à sequência de Fibonacci: ${fibonacciLista}`;
    } else {
      return `${num} não pertence à sequência de Fibonacci: ${fibonacciLista}`;
    }
  }
  
  // Exemplos:
  console.log(check(8)); 
  console.log(check(10)); 
  