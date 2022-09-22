//indice                0   1   2    3  4   5
const lotteryNumbers = [14, 25, 35, 46, 43, 36];

// console.log(lotteryNumbers);

//Quero o primeiro elemento
// console.log(lotteryNumbers[0]);

//Ultimo elemento do array
// console.log(lotteryNumbers[lotteryNumbers.length - 1]);

//Saber o tamanho do array
// console.log(lotteryNumbers.length);

for (i = 0; i < lotteryNumbers.length; i+=1) {
    // console.log(lotteryNumbers[i]);
}

//Estrutura for of

for(let value of lotteryNumbers) {
    console.log(value);
}