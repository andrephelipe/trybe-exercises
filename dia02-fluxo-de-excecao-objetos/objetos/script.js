const customer = {
    primeiroNome: 'Robertin',
    age: 23,
    job: 'professor',
}

customer.ultimoNome = 'Faria'; // adiciona um elemento no objeto
customer['social'] = 'instagram'; // adiciona o elemento no objeto 

let newKey = 'nauralidade';
const naturalidade = 'brasileiro';

customer[newKey] = naturalidade;
let nomeCompleto = 'fullName';
customer[nomeCompleto] = `${customer.primeiroNome} ${customer.ultimoNome}`;

console.log(customer);