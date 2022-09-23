let numerosSorteados = [8, 10, 15, 33, 10, 8];

//Faz com que meu array adicione 6 numeros aleatorios
// for (i = 0; i < 6; i+=1) {
//     numerosSorteados.push(Math.floor(Math.random() * 60) +1);
// }

// let vazio = [];

for(a = 0; a < numerosSorteados.length; a+= 1){
   for(b = 0; b < numerosSorteados.length; a +=1) {
        if(numerosSorteados[a] === numerosSorteados[b]) {
            console.log(numerosSorteados[b])
        }
   }
}

console.log(numerosSorteados);