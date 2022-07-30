// // 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// const a = 16
// const b = 23

// console.log("Adição: " + (a + b));
// console.log("Subtração: " + (a - b));
// console.log("Multiplicação: " + (a * b));
// console.log("Divisão: " + (a / b));
// console.log("Módulo: " + (a % b));

// // 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const n1 = 12;
// const n2 = 8;

// if (n1 > n2) {
//     console.log("n1 é maior que n2");
// }
// else {
//     console.log("n2 é maior que n1");
// }

// // 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const n1 = 18;
// const n2 = 56;
// const n3 = 34

// if (n1 > n2 && n1 > n3) {
//     console.log("n1 é o maior número");
// }
// else if (n2 > n1 && n2 > n3) {
//     console.log("n2 é o maior número");
// }
// else {
//     console.log("n3 é o maior número");
// }

// // 4. Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
// const numero = 6;

// if (numero > 0) {
//     console.log("positive");
// }
// else if (numero < 0) {
//     console.log("negative");
// }
// else {
//     console.log("zero");
// }

// // 🚀  5.  Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// // • Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// // • Um ângulo será considerado inválido se não tiver um valor positivo.
// let angulo1 = 30;
// let angulo2 = 50;
// let angulo3 = 100;

// let somaDosAngulos = angulo1 + angulo2 + angulo3;

// let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

// if (angulosPositivos) {
//     if (somaDosAngulos === 180) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// } else {
//     console.log("invalided");
// }
// // 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// // • Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// // • Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// // • Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// // •Exemplo: bishop (bispo) -> diagonals (diagonais)
// const pecaXadrez = "Cavalo";
// switch (pecaXadrez.toLowerCase()) {
//     case "torre":
//         console.log("Movimenta-se em direção reta pelas colunas ou fileiras.");
//         break;

//     case "rainha":
//         console.log("Pode mover-se pelas colunas, fileiras e diagonal de outra cor.");
//         break;

//     case "cavalo":
//         console.log("Movimenta-se sempre em L.");
//         break;

//     case "bispo":
//         console.log("Pode mover-se somente nas diagonais");
//         break;

//     case "peão":
//         console.log("Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal.");
//         break;

//     case "rei":
//         console.log("Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
//         break;

//     default:
//         console.log("Erro: Peça inválida");
//         break;
// }

// // 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// // • Porcentagem >= 90 -> A
// // • Porcentagem >= 80 -> B
// // • Porcentagem >= 70 -> C
// // • Porcentagem >= 60 -> D
// // • Porcentagem >= 50 -> E
// // • Porcentagem < 50 -> F
// // •  O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// const porcentagem = -45
// if (porcentagem < 0 || porcentagem > 100) {
//     console.log("ERROR 404 :[");
// }
// else if (porcentagem >= 90) {
//     console.log("A");
// }
// else if (porcentagem >= 80) {
//     console.log("B");
// }
// else if (porcentagem >= 70) {
//     console.log("C");
// }
// else if (porcentagem >= 60) {
//     console.log("D");
// }
// else if (porcentagem >= 50) {
//     console.log("E");
// }
// else {
//     console.log("F");
// }

// // 8. 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// // • Bonus: use somente um if.
// const number1 = 1;
// const number2 = 3;
// const number3 = 5;

// // let impar = false;

// // if(number1 % 2 === 0) {
// //     console.log(true);
// // }
// // else if(number2 % 2 === 0) {
// //     console.log(true);
// // }
// // else if(number3 % 2 === 0) {
// //     console.log(true);
// // }
// // else{
// //     console.log(false);
// // }

// let ehImpar = false

// if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)) {
//     ehImpar = true;
// }
// console.log(ehimpar);

// // 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// // • Bonus: use somente um if.
// const number1 = 1;
// const number2 = 3;
// const number3 = 5;

// let ehPar = false

// if ((number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1)) {
//     ehPar = true;
// }
// console.log(ehPar);

// // 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// // • Atente que, sobre o custo do produto, incide um imposto de 20%.
// // • Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// // • O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//        // •valorCustoTotal = valorCusto + impostoSobreOCusto
//        // • lucro = valorVenda - valorCustoTotal (lucro de um produto)
// const valorProduto = 8;
// const valorVenda = 3;

// if (valorProduto >= 0 && valorVenda >= 0) {
//   const custoTotal = valorProduto * 1.2;
//   const lucroTotal = (valorVenda - custoTotal) * 1000;
//   console.log(lucroTotal);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// }

// // 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// // • A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// //   • INSS (Instituto Nacional do Seguro Social)

//      // • Salário bruto até R$ 1.556,94: alíquota de 8%
//      // • Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//      // • Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//      // • Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//      //   • INSS (Instituto Nacional do Seguro Social)

//      // • Até R$ 1.903,98: isento de imposto de renda

//      // • De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//      // • De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//      // • De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//      // • Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

//  //Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

//  // • O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//  // • Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//  // • Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//  // • R$ 2.670,00: salário com INSS já deduzido;
//  // • 7.5%: alíquota de imposto de renda;
//  // • R$ 142,80 parcela a se deduzir do imposto.
//  // • Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//  // • O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

//    //Resultado: R$ 2.612,55.
//   // •Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

  let aliquotaInss;
  let aliquotaIr;

  let salario = 3500;

  if (salario <= 1556.94) {
    aliquotaInss = salario * 0.08;
  } 
  else if(salario <= 2594.92) {
    aliquotaInss = salario * 0.09;
  }
  else if(salario <= 5189.82) {
    aliquotaInss = salario * 0.11; 
  } else {
    aliquotaInss = 570.88;
  }
  
  let salarioBase = salario - aliquotaInss;

  if (salario <= 1903.98) {
    aliquotaIr = 0;
  } 
  else if(salario <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.80;
  }
  else if(salario <= 3751.05) {
    aliquotaIr = (salarioBase * 0.15) - 354.80;
  } 
  else if(salario <= 4664.68) {
    aliquotaIr =  (salarioBase * 0.225) - 636.13;
  } else {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
  }

  let salarioLiquido = salarioBase - aliquotaIr

  console.log('Salário Líquido: ' + salarioLiquido );



  



  

  


 

