const textoNaoEstruturado = " meu cpf eh 123.456.789-10 ";

const regex = new RegExp(" [0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2} ");

console.log(textoNaoEstruturado.match(regex));