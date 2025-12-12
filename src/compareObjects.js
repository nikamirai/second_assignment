// Напишите функцию compareObjects, которая получается на вход 2 объекта и возвращает true/false являются ли они “одинаковыми”.
//
// Под одинаковыми объектами подразумеваются два объекта, у которых по одинаковым ключам лежат одинаковые значения

const compareObjects = (obj1, obj2) => {
  for (const obj1Element in obj1) {
    if (!(obj1[obj1Element] === obj2[obj1Element])) {
      return false;
    }
  }
  return true;
};

console.log(compareObjects({}, {})); // true
console.log(compareObjects({ age: 45 }, { age: 45 })); // true
console.log(compareObjects({ ready: true, photo: null }, { ready: true, photo: null })); // true
console.log(compareObjects({ a: 10, b: 20, c: 30 }, { c: 30, a: 10, b: 20 })); // true

console.log(compareObjects({ name: 'max' }, { name: 'john' })); // false
console.log(compareObjects({ nick: 'maxon' }, {})); // false
console.log(compareObjects({ age: 45, name: 'a' }, { age: 45, name: 'b' })); // false
