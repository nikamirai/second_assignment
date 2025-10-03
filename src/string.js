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
