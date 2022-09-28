// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
//10;

// let fatorial = 1;

// for(i=1; i <= 4; i++) {
//     fatorial *= i;
// }

// console.log(fatorial);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// // rebyrt

// let reverso = "";

// for(i=0; i < word.length; i++) {
//     reverso += word[word.length - 1 - i];
// }

// console.log(reverso);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css', "xi"];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for(i=0; i < array.length; i++) {
//     if(array[i].length > maiorPalavra.length) {
//         maiorPalavra = array[i];
//     }
// }

// for(i=0; i < array.length; i++){
//     if(array[i].length < menorPalavra.length){
//         menorPalavra = array[i];
//     }
// }

// console.log(maiorPalavra);
// console.log(menorPalavra);

//Pegar o maior e menor numero de um array
// let numeros = [10, 15, 11, 90, 7, 5, 50, 1];

// let maior = numeros[0];
// let menor = numeros[0];

// for(i=0; i < numeros.length; i++) {
//     if(numeros[i] > maior) {
//         maior = numeros[i];
//     }

//     if(numeros[i] < menor) {
//         menor = numeros[i];
//     }
// }

// console.log(maior);
// console.log(menor);

// const nome = ["Andre", "phelipe", "de", "Souza", "Santana"]
// function concatName(frase) {

//     let newFrase = [];

//     newFrase.push(frase[frase.length -1]);
//     newFrase.push(frase[0]);

//     return newFrase;

//   }

//   console.log(concatName(nome));

//FizzBuzz
// const num = [2, 15, 7, 9, 45];
// function fizzBuzz(arr) {

//   let resultados = [];

//   for(i=0; i < arr.length; i++) {
//     if(arr[i] % 3 == 0 && arr[i] % 5 ==0) {
//       resultados.push('fizzBuzz');
//     } else if (arr[i] % 3 == 0) {
//       resultados.push('fizz');
//     } else if (arr[i] % 5 == 0) {
//       resultados.push('Buzz');
//     } else {
//       resultados.push('bug!');
//     }
//   }
//   return resultados;
// }

// console.log(fizzBuzz(num));

//gatos vs rato

// Desafio 7
// function catAndMouse(mouse, cat1, cat2) {

// if( (cat1 - mouse) && (mouse - cat2) === 1 || (cat1 - mouse) && (mouse - cat2) === -1) {
//     return 'os gatos trombam e o rato foge';
//   } else if (mouse - cat2 < mouse - cat1) {
//     return 'cat2'
//   } else if(mouse - cat1 < mouse - cat2){
//     return 'cat1';
//   }
// }

// console.log(catAndMouse(1, 0, 2));

// function footballPoints(wins, ties) {

//   let pontuacaoFinal = (wins * 3) + (ties * 1);

//   return pontuacaoFinal;
// }

// console.log(footballPoints(0, 0));

// function splitSentence(frase) {
//  let resultado = frase.split(' ');
//  return resultado;
// }

// console.log(splitSentence('vamo que vamo'));

// let frase = 'go Trybe!';

// let resultado = frase.split(' ');

// console.log(resultado);




const myNumber = [1,1,9,9,7,0,2,1,9,6,0];
function generatePhoneNumber(final) {
 let valorChave = {};

 //loop que conta quantos elementos repetidos há no meu array, colocando dentro do objeto vazio valorChave.
  final.forEach((cont) => {
    valorChave[cont] = (valorChave[cont] || 0) + 1;
  });

  //vai me falar, qual é o maior numero de vezes que a chave repete ex: array[1,1,2] '1' : 2; resultado = 2;
  const maxValor = Math.max(...Object.values(valorChave));

  //vai me dar o indice, qual numero que repete mais e nao quantas vezes.
  const num = Object.keys(valorChave).find((key) => {
    return valorChave[key] === maxValor;
  });

  if(maxValor > 3) {
    return 'numero invalido';
  }


  return num;

}
console.log(generatePhoneNumber(myNumber));