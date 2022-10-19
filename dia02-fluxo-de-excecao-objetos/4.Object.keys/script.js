const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
};

// esse for pega todas as chaves do meu objeto => (name, genre, createdBy, favoriteCharacter...)
for (const key in coolestTvShow) {
    // console.log(key);
}

// Novo objeto para usar Object.key
const newObject = {
    name: 'xi',
    time: 'curintia',
    city: 'biriba',
    age: 22,
}

// faz a mesma coisa que o for só que c a propiedade object.key, transformando as chaves em um array e eu tambem posso pegar pelo indice;

//   console.log(Object.keys(newObject)); // name, time, city, age
//   console.log(Object.keys(newObject).length); 
//   console.log(Object.keys(newObject)[2]);

// object keys ARRAY
let arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr)); // ele vai passar o indice das propiedades

//Object keys ordenação aleatoria por chave
let obj = {
    100: 'a',
    2: 'b',
    7: 'c',
}

// console.log(Object.keys(obj)); // 2, 7 ,100

// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const estudante = {
    html: 'muito bom',
    css: 'bom',
    js: 'ok',
    softSkill: 'otimo'
}

const estudante2 = {
    html: 'muito bom',
    css: 'ruim',
    js: 'mara',
    softSkill: 'bom',
    git: 'legal',
}

// primeiro a gente pega as chaves com o Object.keys e depois faz o for in pra pegar o index e achar os valores das chaves.
const lista = (student) => {
    const arrSkill = Object.keys(student);
    for (const index in arrSkill) {
        console.log(`${arrSkill[index]} nivel ${student[arrSkill[index]]}`);
    }
}
console.log('Estudante 1');
lista(estudante);

console.log(''); // pular linha na hr de mostrar

console.log('Estudante 2');
lista(estudante2);
