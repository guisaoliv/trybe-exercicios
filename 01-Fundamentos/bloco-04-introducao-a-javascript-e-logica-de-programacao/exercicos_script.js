// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for (let index = 0; index < numbers.length; index+=1) {
//     console.log(numbers[index]);
// }

//// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// for (let soma of numbers) {
//     soma +=1;
//     console.log(soma);
// }

////ou 

// let soma = 0

// for (let index = 0; index < numbers.length; index+=1) {
//     soma += numbers[index];
// }

// console.log(soma);

//// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// for (let index = 0; index < numbers.length; index+=1) {

// let soma = 0

// for (let index = 0; index < numbers.length; index+=1) {
//     soma += numbers[index];

// }
// let resultado = soma / numbers.length;
// console.log(resultado);

//// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// let resultado = soma / numbers.length;
// // console.log(resultado);

// if (resultado > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

//// 🚀 5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let maiorValor = numbers[0];

//   for (let index = 0; index < numbers.length; index+=1) {
//     if(numbers[index] > maiorValor) {
//         maiorValor = numbers[index];
//     }
//  }
// console.log(maiorValor);

//// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let resultado = soma / numbers.length;
// console.log(resultado);

if (resultado > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}
