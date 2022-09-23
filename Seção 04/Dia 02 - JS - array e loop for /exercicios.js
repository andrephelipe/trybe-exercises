let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// console.log(numbers);

// Some todos os valores contidos no array e imprima o resultado;
// let soma = [];
// for(i = 0; i < numbers.length; i+=1) {
//     soma  = parseInt(soma + numbers[i]);
// }
// console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array;
// let media = [];
// for(i = 0; i < numbers.length; i+=1) {
//     media  = parseInt(media + numbers[i]);
// }

// media = media / (numbers.length);
// console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
// if(media > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor  menor que 20");
// }

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let maior = 0;

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] > maior) {
//         maior = numbers[index]
//     }
// }

// console.log(maior);
// console.log(Math.max(...numbers));

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
// let impar = 0;
// for(i = 0; i < numbers.length; i++) {
//     if(numbers[i] / 2 % 1) {
//         impar++
//     }
// }

// console.log(`No array numbers temos ${impar} impares`);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = 0;

for (let index = 0; index < numbers.length; index++) {
    for(i = 0; i < numbers.length; i++) {
        if(numbers[index] < numbers[i]) {
            menor = numbers[i]
        }
    }
}

