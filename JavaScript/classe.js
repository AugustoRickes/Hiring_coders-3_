class Matematica{

soma(valorA, ValorB){
    return valorA + ValorB;
}
subtracao(valorA, ValorB) {
    return valorA - ValorB;
}
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);