// Напишите функцию compareObjectArrays, которая получается на вход 2 массива объектов и возвращает true/false являются ли они “одинаковыми”.
// Под одинаковыми массивами объектов подразумеваются два массива, у которых по одинаковым индексам лежат одинаковые объекты.
// Для решения возьми за основу функцию compareArrays, а для сравнения объектов переиспользуйте функцию compareObjects

// ЗАДАНИЕ ДЬЯВОЛА
const compareObjectArrays = (massObj1, massObj2) => {
  const mass1 = [];
  const mass2 = [];
  for (const mass1Element of massObj1) {
    for (const element in mass1Element) {
      mass1.push(element);
      mass1.push(mass1Element[element]);
    }
  }
  for (const mass2Element of massObj2) {
    for (const element in mass2Element) {
      mass2.push(element);
      mass2.push(mass2Element[element]);
    }
  }
  for (let i = 0; i < mass1.length; i++) {
    if (mass1[i] !== mass2[i]) {
      return false;
    }
  }
  return true;
};

console.log(
  compareObjectArrays(
    [{ name: 'nika', age: 21 }, { name: 'artem' }, { name: 'tutu' }],
    [{ name: 'nika', age: 21 }, { name: 'artem' }, { name: 'tururu' }],
  ),
); //false

console.log(
  compareObjectArrays(
    [{ name: 'nika', age: 21 }, { name: 'artem' }, { name: 'tutu' }],
    [{ name: 'nika', age: 21 }, { name: 'artem' }, { name: 'tutu' }],
  ),
); // true
