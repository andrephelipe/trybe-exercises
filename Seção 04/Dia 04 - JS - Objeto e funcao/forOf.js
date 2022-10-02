let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
//   console.log(value);
};
//resultado: hamburguer, bife, acarajé;

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    // console.log(`Olá ${names[key]}`); /* ola joao, ola maria, ola jorge */
    // console.log(key); /* person1, person2, person3 */
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(`${key}: ${car[key]}`);
  }