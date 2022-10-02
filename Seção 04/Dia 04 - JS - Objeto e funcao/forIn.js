let pizzas = {
    sabor: 'palmito',
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas) {
    // console.log(key); /* sabor preco bordacatupiry */
    // console.log(pizzas); /* repete 3 vezes o meu objeto */
    // console.log(pizzas.preco);
    // console.log(pizzas['preco']);
    // console.log(pizzas[key]); // retorna o valor das chaves
}

let pizzasDoces = ['banana', 'chocolate', 'morango'];

for (let key in pizzasDoces) {
    // console.log(key);/* mostra quantos elementos tenho dentro do array */
    //console.log(pizzasDoces); /* repete o numero de elementos que tem dentro do array q nesse caso são 3  */
    // console.log(pizzasDoces[key]); /* mostra o resultados das chaves do array */
    // console.log(key, pizzasDoces[key]); /* mostra o resultados das chaves do array e o indice */
};


let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
//   console.log(/*index,*/ cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(`${index}: ${car[index]}`);
  }