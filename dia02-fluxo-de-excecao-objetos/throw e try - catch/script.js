const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, 3));

// soma de string
const s = (value1, value2) => value1 + value2;
// console.log(s(2, '3')); // resultado: 23

// validação de dados if 
const soma = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };  
//   console.log(soma(2, '3'));

// throw
const summ = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
//   console.log(summ(2, '3'));

// throw try catch
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const con = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(con(2, '3'));