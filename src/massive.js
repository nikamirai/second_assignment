// Напишите функцию, которая принимает на вход массив и соединитель, и выводит все элементы массива через заданный соединитель, используя функцию массива .join
// Выведите все элементы массива, соединяя их через нижнее подчеркивание _

const names = ['Ruslan', 'Kirill', 'Maxim', 'Petr'];

const joinArray = (mass, sep) => {
  return mass.join(sep);
};

console.log(joinArray(names, '_'));

// В профиле пользователя указывается его текущий ник, и история прошлых никнеймов.
//   Напишите функцию, которая получает объект пользователя и новый никнейм.
//   Функция должна в историю никнеймов добавить текущий никнейм пользователя, а затем установить пользователю новый никнейм.

const user = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };

const setNickname = (uObj, newNick) => {
  user.nicknameHistory.push(user.nickname);
  user.nickname = newNick;
};

setNickname(user, 'Александр Сильвестрович');
console.log(user); // { id: 8, nickname: 'Александр Сильвестрович', nicknameHistory: [ 'Саня Санёчек' ] }

setNickname(user, 'Саша');
console.log(user); // { id: 8, nickname: 'Саша', nicknameHistory: [ 'Саня Санёчек', 'Александр Сильвестрович' ]}

const max = { id: 3, nickname: 'Franz Hermann', nicknameHistory: ['max', 'maxxx'] };
console.log(max); // { id: 3, nickname: 'Franz Hermann', nicknameHistory: [ 'max', 'maxxx' ]}

// Случайный элемент массива
// Напишите функцию getRandomItem(arr), которая принимает на вход массив элементов arr, а возвращает случайный элемент из этого массива.

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

console.log(getRandomItem(names));

// Семья планирует поездку в магазин, и формирую список продуктов, которые необходимо купить.
//   Каждый из членов семьи докидывает свои пункты в список, при этом не проверяя добавлял ли уже кто-то этот товар или нет.
//   Напишите функцию, которая принимает на вход массив и новый элемент, и добавляет в массив новый элемент только в том случае, если такого элемента ещё нет в списке.
//   Это позволит создавать массивы без повторяющихся элементов, и тогда любой член семьи сможет добавить новый пункт, и они не будут дублироваться.

const shoppingList = ['молоко', 'хлеб', 'яйца'];

const addUniqueItem = (arr, item) => {
  if (!arr.includes(item)) {
    arr.push(item);
  }
};

addUniqueItem(shoppingList, 'яблоки');
addUniqueItem(shoppingList, 'молоко');
addUniqueItem(shoppingList, 'сыр');

console.log(shoppingList);
