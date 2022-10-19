/*
for in 
- objetos 
- array
*/

/*
for of 
- SOMENTE ARRAY
*/

const user = {
    name: 'andre',
    age: 23
}

for (const index in user) {
    // console.log(index); // name, age => chaves
    // console.log(user[index]); // andre, 23 => valores

}

const names = ['andre', 'babel', 'ricardo', 'kyla'];
for (const index in names) {
    // console.log(index); // mostra quantos elementos a gente tem em formato de index
    // console.log(names[index]); // mostra os valores

}

// FOR OF

const nam = ['ana', 'beatriz', 'karol', 'gabriel jesus'];
const nota = [10, 5, 2, 6]

for (const index of nam) {
    console.log(`${index} tirou 10 na prova`); // mostra os nomes    
}

// com for normal
for(let i = 0; i < nam.length; i++) {
//    console.log(`${nam[i]} tirou ${nota[i]} na prova`);
}

