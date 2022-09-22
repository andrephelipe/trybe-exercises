let movie = "Avanger"; //string literal
let score = 10; // number literal
let scorE = 10.50; // number literal
let isValid = true; // boolean
let name; // undefined
let color = null; // null --> começar um site sem cor e a pessoa colocar

let salario = 3500;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(3 ** 3);

//incremento ++
//decremento --

// salario++;
salario--;
// console.log(salario)

const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
  };

// console.log(typeof(patientInfo));

const base = 5;
const altura = 8;

const area = base * altura;
const perimeter = base * 2 + altura * 2;

// console.log(perimeter);

// if  --> se 
// else --> se não 

/*
if (condição) {
    //codigo, caso a condição seja atendida
} else if (outra condicao) {
    // outra condição
} else {
    // se nenhuma acima funcionar ele roda o else direto
}
*/

/*
let trybe = 19.4;

if (trybe >= 14 && trybe < 14.40) {
    console.log("ESQUENTA'")
} else if (trybe >= 16.30 && trybe < 18) {
    console.log("O PIÃO ESTA EM AULA AO VIVO")
} else if (trybe >= 19.30 && trybe < 20) {
    console.log("ENCERRAMENTO")
} else {
    console.log("NÃO ESTA NA TRYBE ESSE INFELIZ")
}
*/

/*
const nota = 0;

if (nota >= 80) {
    console.log("Parabens, você foi aprovado(a)")
} else if (nota < 80 && nota > 60 ) {
    console.log("Você está na lista de espera!")
} else {
    console.log("Você foi reprovado(a)")
}
*/

//switch -- case

let semaforo = "azul";

switch (semaforo) {
    case "vermelho":
        console.log("PARE!");
        break;
    case "amarelo":
        console.log("ATENÇÃO");
        break;
    case "verde":
        console.log("PASSA RAPIDO, VAI FECHAR ESSA MERDA");
        break;
    default:
        console.log("valor não identificado");
}

