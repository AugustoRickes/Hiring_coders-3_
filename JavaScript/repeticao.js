// estrutura de repeticao utilizando FOR

/*var numerosorteado = 10;

 var tabuada = 12;

for(var i = 0; i < 20; i++) {
console.log("valor de " + tabuada + " x " + i + " i " + tabuada * i);

} */

/*for(var i = 0; i < 20; i++) {
    if (valorSorteado === i) {
        console.log("seu numero foi encontrado");
        break; //geralmente nao utilize o break 
    }
}

*/


// repeticao utilizando o WHILE

var achou = false;

var numerosorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor = possivelValor + 1;
if (numerosorteado === possivelValor){
    achou = true
} else {
    console.log("Possivel valor nao corresponde ao valor sorteado " + possivelValor 
    ) ;
}

}