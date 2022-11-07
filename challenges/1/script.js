function vezesLetraAparece(frase, letra) {
    var resultado = 0;
  
    for (const letraAtual of frase) {
      if (letraAtual === letra) {
        resultado++;
      }
    }
    
    return console.log(resultado);
  }
  
  vezesLetraAparece('Mas, ao executar o código, percebemos que há um outro erro. O código não está retornando, de fato, o número de vezes que a letra passada no 2º argumento ocorre na string', 'o');
