// let numbers = [100,9,8,7,6,5,4,3,2,1];//10
//                                                     // 9 

// for (i=1; i < numbers.length; i++) {   
//     for(o=0; o < numbers.length; o++) {
//         if (numbers[i] < numbers[o]) {
//             let temp = numbers[o];
//             numbers[o] = numbers[i];
//             numbers[i] = temp;
//         }
//     }    
// }

// console.log(numbers);


//comparar numeros da lista1 e lista2 e dizer quais numeros são repetidos
let list1 = [15, 1, 2, 3, 4, 35, 6, 7, 8, 9, 10, 15, 20,22];
let list2 = [11, 22, 13, 14, 15, 16, 17, 18, 1, 20,35];
let iguais = [];

for(i=0; i < list1.length; i++) {
    for(o=0; o < list2.length; o++) {
        if(list1[i] === list2[o]) {
            if(iguais.includes(list1[i]) == false) {
                iguais.push(list1[i]);
            }
        }
    }
}

console.log(iguais);