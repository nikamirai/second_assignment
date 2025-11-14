// Напишите функцию, которая принимает на вход массив и соединитель, и выводит все элементы массива через заданный соединитель, используя функцию массива .join
// Выведите все элементы массива, соединяя их через нижнее подчеркивание _

const names = ['Ruslan', 'Kirill'];

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
