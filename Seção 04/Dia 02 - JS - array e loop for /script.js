let variavel = "valor"; // variavel simples

// Dono de pizzaria e vamos fazer o menu

/*
let pizza1 = "4 queijos";
let pizza2 = "Franco com catupiry"
let pizza3 = "Caipira"
let pizza4 = "palmito com milho e queijo"
let pizza5 = "Carne com queijo"

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizza5);
*/

//Array

// INDICE         0            1         2          3         4
let pizzas = ["4 queijos", "Frango", "Caipira", "palmito", "carne"];

//INDICE --> SERVE PARA ACHAR UM VALOR DENTRO DO ARRAY O ARRAY TEM 5 ELEMENTOS, POREM O INDICE COMECA NO 0

//Adicionar um novo sabor
pizzas[5] = "Peito de peru";

//Colocar um valor no lugar que ja tem. OBS: Ele subescreve o valor em cima do antigo, com const isso nao funciona
pizzas[0] = "Calabreza";

//Adicionar um valor na ultima posicao --> push
pizzas.push("chocolate com morango");
pizzas.push("4 queijos");

//Descobrir o tamanho do meu array
console.log(pizzas.length);

//Colocar em ordem alfabetica --> numeros, lestras maiusculas contam e caracteres especiais
console.log(pizzas.sort());

//Achar o valor pelo indice
console.log(pizzas[0]); // indice

//Concatenação
console.log("O cardapio é de : " + pizzas);

//mostrar pizza por pizza em vez de dentro do array
/*
console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);
console.log(pizzas[3]);
console.log(pizzas[4]);
console.log(pizzas[5]);
console.log(pizzas[6]);
*/

for (let index = 0; index < pizzas.length; index++) {
  console.log(pizzas[index]);
}
