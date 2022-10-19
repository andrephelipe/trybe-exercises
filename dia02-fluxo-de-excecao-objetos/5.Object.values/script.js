const myDados = {
    name: 'andre',
    age: 23,
    roby: 'rombo six',
    date: 'jhenny'
}

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };

// mostra os valores 
for (const value in myDados) {
    // console.log(myDados[value]);
}

//Object.values
console.log(Object.values(myDados));

//object.values => funcao anônima
const valores = (i) => Object.values(i);
console.log(valores(myDados));
console.log(valores(student));

const chaves = (j) => Object.keys(j);
console.log(chaves(student));

console.log(`${Object.values(myDados)[0]} é ${Object.values(student)[0]}`);