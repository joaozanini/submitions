function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  console.log(fatorial(5)); // Saída: 120