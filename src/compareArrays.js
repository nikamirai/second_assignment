// Напишите функцию compareArrays, которая получается на вход 2 массива и возвращает true/false являются ли они “одинаковыми”.
//
// Под одинаковыми массивами подразумеваются два массива, у которых по одинаковым индексам лежат одинаковые значения

const compareArrays = (mass1, mass2) => {
  for (const mass1Element of mass1) {
    if (!(mass1Element === mass2[mass1.indexOf(mass1Element)])) {
      return false;
    }
  }
  return true;
};

console.log(compareArrays([true, null, 1, 'stop'], [true, null, 1, 'stop']));
console.log(compareArrays([], []));
console.log(compareArrays([1, 2, 3], [2, 1, 3]));
console.log(compareArrays([null], []));
