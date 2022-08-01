// // Parte II - Funções

// //1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// //   • Exemplo de palíndromo: arara.
// //   • Retorno esperado: true
// //   • verificaPalindrome('desenvolvimento');
// //   • Retorno esperado: false
// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

// // 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// function maiorindice(indice) {
//     let indiceMaior = 0;
   
//     for (let key in indice) {
//         if (indice[indiceMaior] < indice[key]) {
//             indiceMaior = key;
//         }
//     }
//     console.log(indiceMaior);
// } 

// maiorindice([2, 3, 6, 7, 10, 1]);

// // 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// function menorIndice(array) {
//     let indiceMenor = 0;

//     for(let key in array) {
//         if(array[indiceMenor] > array[key]) {
//             indiceMenor = key
//         }
//     }
//     console.log(indiceMenor)
// }

// menorIndice([2, 4, 6, 7, 10, 0, -3]);

// 4.  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(array) {

    let indiceMaior = 0;
    
    for(let key in array){
        if(array[indiceMaior] < array[key]) {
            indiceMaior = key
        }
    }
    console.log(indiceMaior);
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

 