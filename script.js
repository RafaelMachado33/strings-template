/*let nome = prompt(`Digite seu nome:`);
let cor = prompt(`Qual é a sua cor favorita:`);

let fraseConcatenacao = `A cor favorita de(a) ${nome} é ${cor}!`;

console.log(fraseConcatenacao);*/

//-------------------------------------------

//ex1

let nome = prompt(`Digite seu nome:`);
let email = prompt(`Digite seu email:`);
let frase= `O e-mail ${email} foi cadastrado com sucesso.\n Boas vindas ${nome}!`;
let nome2= nome.replaceAll(" ","");

console.log(frase);
console.log(nome2);  //Quantidade de caracter presente no nome
let novaFrase =frase.replaceAll("r","x").replaceAll("R","x");
console.log(novaFrase);
let possuiarrouba = frase.includes("@")?"Sim possui.":"Não possui.";
console.log(`O e-mail da pessoa possui @? ${possuiarrouba}`);


