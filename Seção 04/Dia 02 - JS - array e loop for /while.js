
// let counter = 5;

// while(counter !== 5) {
//   counter += 1;
// }

// let arr = [];
// // let sorte = [22, 30, 50, 44, 22, 30]
// let num = [2,5,6,4,2,5,8]
// while (arr.length < 7) {
//     // let num = Math.floor(Math.random() * 60) + 1;
//     if(arr.includes(num) == false){
//         arr.push(num)
//     }
// }

// console.log(arr);

let numeros = [];
const numerosSorteados = [10,15,43,10,80,91,15,17,17,80];

for(i = 0; i < numerosSorteados.length; i++) {
    if(numeros.includes(numerosSorteados[i]) == false) {
        numeros.push(numerosSorteados[i]);
    }
}

console.log(numeros);