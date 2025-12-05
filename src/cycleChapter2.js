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

/*
Задание 4. Напишите функцию, которая получает на вход массив объектов с людьми, и возвращает только имена "подходящих" людей из списка:
* Мужчины старше 18 или женщины старше 20

Пол определяется по значению в поле gender:
* f - female, женщина
* m - man, мужчина
 */

const filter = (people) => {
  const sortPeople = {};
  let kolM = 0;
  let kolF = 0;
  for (const user of people) {
    if (user.gender === 'm' && user.age > 18 && kolM === 0) {
      kolM++;
      sortPeople.mans = user.name + ' ';
    } else if (user.gender === 'm' && user.age > 18) {
      sortPeople.mans += user.name + ' ';
    }
    if (user.gender === 'f' && user.age > 20 && kolF === 0) {
      kolF++;
      sortPeople.women = user.name + ' ';
    } else if (user.gender === 'f' && user.age > 20) {
      sortPeople.women += user.name + ' ';
    }
  }
  return sortPeople;
};

const people = [
  { id: 8, name: 'Александр', gender: 'm', age: 25 },
  { id: 12, name: 'Мария', gender: 'f', age: 22 },
  { id: 31, name: 'Иван', gender: 'm', age: 17 },
  { id: 34, name: 'Ольга', gender: 'f', age: 19 },
  { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
  { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
  { id: 3, name: 'Сергей', gender: 'm', age: 18 },
  { id: 20, name: 'Анна', gender: 'f', age: 20 },
  { id: 19, name: 'Андрей', gender: 'm', age: 15 },
  { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];

console.log(filter(people));
/* Должно вывестись:
{
  mans: [ 'Александр', 'Дмитрий' ],
  women: [ 'Мария', 'Екатерина', 'Наталья' ]
}
 */

// Задание 5. Округлить значения
// Дан массив чисел, необходимо округлить каждое положительное число в нем, кроме последних трех положительных чисел.

const round = (mass) => {
  let kolPol = 0; //кол положит чисел с конца
  let index = 0; // индекс 1-го из 3-х с конца положит. чисел
  for (let i = mass.length; i <= mass.length && i !== 0; i--) {
    if (kolPol < 3) {
      if (mass[i] > 0) {
        kolPol++;
        index = i;
      }
    }
  }

  for (let i = 0; i < index; i++) {
    mass[i] = Math.round(mass[i]);
  }
  console.log(mass);
};

const chisla = [1.1, 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3];
round(chisla);
