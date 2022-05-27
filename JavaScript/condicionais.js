//caso seja poucos casos utilizar else e if

/*var nome = "Augusto";

if (nome === "Augusto") {
    console.log("legal! Seu nome esta correto");

} else if (nome === "Rickes") {
    console.log("tudo bem! voce serve tambem");

} else {
    console.log("que pena! seu nome nao esta na lista");
} */



 //Utilizando o SWITCH, caso seja casos mais longos

 var nome = "Rickes";

 switch (nome) {
     case "Augusto":
         console.log("bem vindo senhor!");
         break;
         case "Rickes" :
         console.log("Ah! voce nao me engana sr!") ;
         break;
         default:
             console.log("que pena! voce nao eh o senhor");
             break;
 }
