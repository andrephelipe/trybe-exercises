const soma = (valor1, valor2) => valor1 + valor2;
test('soma de dois valores', () => {
    expect(soma(2,5)).toEqual(7);
});