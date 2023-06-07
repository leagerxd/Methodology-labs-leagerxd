'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getParameters = (str) => new Promise((input) => rl.question(str, input));

const validateInput = async () => {
  let a, b, c, isInvalid;
  do {
    a = +(await getParameters('Введіть число a: '));
    b = +(await getParameters('Введіть число b: '));
    c = +(await getParameters('Введіть число c: '));
    isInvalid = a === 0 || isNaN(a) || isNaN(b) || isNaN(c);
    isInvalid &&
      console.error(
        'Коефіцент a не може дорівнювати 0.'
      );
  } while (isInvalid);
  return { a, b, c };
};

const evaluateEquation = async () => {
  const { a, b, c } = await validateInput();
  const discriminant = b ** 2 - 4 * a * c;
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  if (discriminant < 0) {
    console.log('Рівняння не має дійсних коренів');
  } else {
    console.log(
      discriminant === 0
        ? `Рівняння має один дійсний корінь: x = ${x1}`
        : `Рівняння має два дійсних корені: x1 = ${x1}, x2 = ${x2}`
    );
  }
  rl.close();
};

evaluateEquation();