'use strict';

import * as fsPromises from 'node:fs/promises';

const evaluateEquation = (processedData) => {
  const [ a, b, c ] = processedData;
  if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.error('Коефіцент a не може дорівнювати 0, оберіть інший коефіцент.');
    return;
  }
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
};

try {
  const data = await fsPromises.readFile(
    "parameters_data.txt", { encoding: "utf-8" });
  const processedData = data.split(' ').map((el) => +el);
  evaluateEquation(processedData);
} catch (err) {
  console.error(err);
}