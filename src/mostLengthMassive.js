/*
Напишите функцию, которая принимает на вход объект, этот объект содержит различные поля и значения.

Функция должна вернуть объект, в котором указаны:
* Максимальная длина массива у полученного на вход объекта
* Последний элемент самого длинного массива у полученного объекта

--- Пояснение
В данном примере у объекта user есть 3 поля, которые содержат массивы:
* example - длина 3
* permissions - длина 2
* emails - длина 4

То есть, самым длинным массивом у этого объекта является массив из поля emails,
значит ответ должен быть следующим:
{ maxLen: 4, lastValue: 'peter@example.com' }


 */
const mostLengthMassive = (obj) => {
  let maxLen = 0;
  let lastValue = '';
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      if (maxLen < obj[key].length) {
        maxLen = obj[key].length;
        lastValue = obj[key].at(-1);
      }
    }
  }
  return `maxLen: ${maxLen}, lastValue: '${lastValue}'`;
};

const user = {
  example: [1, 2, 3],
  'X-Address': {
    street: 'Ленина',
    house: '10-Б',
  },
  data: { length: 50 },
  nickname: null,
  permissions: [true, false],
  age: 101,
  emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
  name: 'Peter Charles',
  isAdult: true,
  now: new Date().toISOString(),
};

console.log(mostLengthMassive(user));
// { maxLen: 4, lastValue: 'peter@example.com' }
