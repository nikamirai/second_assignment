//Напишите функцию, которая принимает на вход объект и название поля, и удаляет это поле из объекта
let person = {};
person['age'] = 10;
person['nick'] = 'nickname';

const deleteobject = (nameObject, nameRow) => {
  delete nameObject[nameRow];
};

console.log(deleteobject(person, 'age'));


