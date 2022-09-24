// A primeira funcionalidade é a geração do cardápio! Que deve ter o formato "ITEM = R$ Preço"

let items = ["batata frita", "x-tudo", "refrigerante", "big mac", "nuggets", "suco"];
let precos = [12, 33, 5, 9, 15];


// for(i=0; i < items.length; i++) {
//     if(precos[i] == undefined) {
//         console.log(`${items[i]} preço indefinido`);
//     } else {
//     console.log(`${items[i]} = R$${precos[i]}`);
//     }
// }


//Quais produtos posso comprar com 20 reais 

let money = 20;
let carrinho = [];
let maisCaro = 0;
let produtoMaisCaro = [];

for(i=0; i < items.length; i++) {
    if(precos[i] <= money) {
        carrinho.push(items[i]);
    }
    if(precos[i] <= money && precos[i] > maisCaro) {
        maisCaro = precos[i]
        produtoMaisCaro = items[i];
    }
}

console.log(carrinho);
console.log(`O produto mais caro que posso comprar é o ${produtoMaisCaro} que custa R$${maisCaro}`);