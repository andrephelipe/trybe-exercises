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
let array = ['java', 'javascript', 'python', 'html', 'css', "xi"];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for(i=0; i < array.length; i++) {
    if(array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
}

for(i=0; i < array.length; i++){
    if(array[i].length < menorPalavra.length){
        menorPalavra = array[i];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);




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