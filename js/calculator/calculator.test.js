const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//pruebas de división 

test('divide 2 / 2 to equal 2', () =>{ //número positivo

  expect(calculator.divide(4,2)).toBe(2);
});

test('divide -4 / 2 to equal 2 ',()=>{
  expect(calculator.divide(-4,2)).toBe(-2); //número negativo
});

//pruebas de multiplicación

test('multiply 5 * 0 equal 0 ',()=>{
  expect(calculator.multiply(5,0)).toBe(0); //multiplicacion por cero
});

test('multiply -20 * -2', ()=>{
  expect(calculator.multiply(-20,-2)).toBe(40); //multiplicacion por dos  numeros negativos
});


