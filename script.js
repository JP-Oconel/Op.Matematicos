/*
  Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
*/

alert("Iremos testar alguns operadores matemáticos");
let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

let resultSoma = (Number(numberOne) + Number(numberTwo));
let resultSub = (Number(numberOne) - Number(numberTwo));
let resultMult = (Number(numberOne) * Number(numberTwo));
let resultDiv = (Number(numberOne) / Number(numberTwo));
let resto = (Number(numberOne) % Number(numberTwo));



alert("a soma dos dois números é: " + resultSoma);
alert("a subtração dos dois números é: " +resultSub);
alert("a multiplicação dos dois números é: " + resultMult);
alert("a divisão dos dois números é: " + resultDiv);
alert("o resto da divisão dos dois números é: " + resto);

if(resultSoma % 2 === 0) {
  alert("a soma dos dois números é: " + resultSoma + " = par");
} else {
  alert("a soma dos dois números é: " + resultSoma + " = ímpar");
};

if(numberOne === numberTwo) {
  alert("Os dois números inseridos são iguais");
} else {
  alert("Os dois números inseridos são diferentes");
}