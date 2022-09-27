const pessoa1 = [10, 9, 8, 10, 10];
const pessoa2 = [10, 10, 7, 9];
const pessoa3 = [10, 10, 1, 9];

//media sem função

// let media = 0;

// for (i = 0; i < pessoa1.length; i++) {
//   media = media + pessoa1[i] / pessoa1.length;
// }

// console.log(media);

//media com função

function media(nota) {
    let media = 0;

    for (i = 0; i < nota.length; i++) {
        media += nota[i] / nota.length;
    }

    return media;
}

console.log(media(pessoa1));
console.log(media(pessoa2));
console.log(media(pessoa3));
