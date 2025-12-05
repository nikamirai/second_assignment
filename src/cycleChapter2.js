//Задание 2. Создайте строковую переменную, запишите туда любой текст.
//Создайте функцию, которая принимает на вход строку, и, используя цикл, разворачивает это слово и возвращает полученное на вход слово в обратном порядке.

const reverse = (str) => {
  let result = '';
  for (let i = str.length; i <= str.length && i !== 0; i--) {
    result += str[i - 1]; // отсчет начинается с 0 индекса
  }
  console.log(result);
};

reverse('): !модог мывон с');

/*
Задание 3. Напишите ф-цию, которая принимает на вход массив пользователей,
а возвращает наиболее популярное имя среди совершеннолетних пользователей
 */

const mostPopularAdultName = (users) => {
  const people = {};
  for (const user of users) {
    if (people[user.name] && user.age >= 18) {
      people[user.name]++;
    } else if (user.age >= 18) {
      people[user.name] = 1;
    }
  }
  let popName;
  let kol = 0;
  for (const mostMen in people) {
    if (kol < people[mostMen]) {
      popName = mostMen;
      kol = people[mostMen];
    }
  }
  return popName;
};

const users = [
  { name: 'ivan', age: 19 },
  { name: 'olga', age: 1 },
  { name: 'alex', age: 22 },
  { name: 'maria', age: 17 },
  { name: 'ivan', age: 25 },
  { name: 'olga', age: 30 },
  { name: 'alex', age: 18 },
  { name: 'sergey', age: 20 },
  { name: 'maria', age: 21 },
  { name: 'ivan', age: 16 },
  { name: 'olga', age: 12 },
  { name: 'ivan', age: 23 },
  { name: 'olga', age: 17 },
];

const result = mostPopularAdultName(users);
console.log(result); // ivan
