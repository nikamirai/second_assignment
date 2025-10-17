import chalk from 'chalk';
//Напишите функцию, которая принимает на вход 2 аргумента - имя и возраст, и с помощью шаблонной строки выводит в консоль сообщение в следующем формате:
let name, age;
const shablon = (name, age) => {
  return console.log(`
       Добро пожаловать!
       Имя: ${name}
       Возраст: ${age}
       Надеемся, Вам понравится пользоваться нашим сервисом!`);
};
console.log(shablon('Ника', 21));

//Создайте функцию, которая принимает на вход строку, а выводит информацию об этой строке:
// Её длина
// Первая буква жёлтым цветом (код найдите сами или используйте chalk)
// Последняя буква зелёным цветом (код найдите сами или используйте chalk)
// Для вывода сообщения в консоль используйте только один console.log!

let stroka;
const informationAboutString = (stroka) => {
  const len = stroka.length;
  const firstBukva = stroka[0];
  const lastBukva = stroka[len - 1];
  return console.log(
    '\nСимволов: ' + len + '\nПервый: ' + chalk.yellow(firstBukva) + '\nПоследний: ' + chalk.green(lastBukva),
  );
};

console.log(informationAboutString('олыпоп'));

const compare = (a, b) => {
  return a === b;
};

console.log(compare('100', 100));
console.log(compare('100', 'str'));
console.log(compare('str', 'str'));
console.log(compare('Str', 'str'));
console.log('-----------------------------');

// Напишите функцию compareStrings, которая принимает на вход 2 строки и возвращает
// результат их сравнения, при этом игнорируя регистры,
// то есть сравнение строк "Привет" и "ПРИВЕТ" должно выдать true.

// Код ниже должен заработать и написать ожидаемые значения:
// */

const compareStrings = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase();
};

let text = 'Начало';
const sub = ` всех ${text.slice(0, text.length - 1)}`;

console.log(compareStrings(text, 'начало')); //true

text += sub;
console.log(compareStrings(text, 'начало всех')); // false
console.log(compareStrings(text, 'начало всех начал')); // true

console.log(compareStrings('РжоМба', 'РЖОМБА')); // true
