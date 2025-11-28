import chalk from 'chalk';

// Напишите функцию, которая получает на вход массив, а возвращает объект с указанием минимального, максимального,
// среднего числа в массиве, то есть функция должна циклом пройтись по полученному массиву, найти минимальный, максимальный, среднее.
//
//   Среднее число - это сумма всех чисел, делённая на их количество, например для массива [1, 2, 6] средним будет 3
//
// Создайте пустой массив, циклом добавьте в него 8 случайных чисел от 2 до 15, передайте этот массив в вашу функцию.
const numbers = [5, 10, 2, 8];

const func = (mass) => {
  let min = mass[0];
  let max = mass[0];
  let summ = 0;
  for (let i = 0; i < mass.length; i++) {
    if (min > mass[i]) {
      min = mass[i];
    }
    if (max < mass[i]) {
      max = mass[i];
    }
    summ += mass[i];
  }
  const avg = summ / mass.length;
  return `Min - ${min}, Max - ${max}, Avg - ${avg}`;
};

console.log(func(numbers));

/*
Напишите ф-цию, которая принимает на вход массив пользователей,
а возвращает наиболее популярное имя среди совершеннолетних пользователей
 */

// const users = [
//   { name: 'ivan', age: 19 },
//   { name: 'olga', age: 1 },
//   { name: 'alex', age: 22 },
//   { name: 'maria', age: 17 },
//   { name: 'ivan', age: 25 },
//   { name: 'olga', age: 30 },
//   { name: 'alex', age: 18 },
//   { name: 'sergey', age: 20 },
//   { name: 'maria', age: 21 },
//   { name: 'ivan', age: 16 },
//   { name: 'olga', age: 12 },
//   { name: 'ivan', age: 23 },
//   { name: 'olga', age: 17 },
// ];
// const person = {};
// const mostPopularAdultName = (mass) => {
//   person.name = mass.name;
// };
//
// const result = mostPopularAdultName(users);
// console.log(result); // ivan

//-------------------------------------------- ------------------------------- --------------------------------------------------

//Напишите функцию, которая получает на вход число, и выводит число от 0 до этого число, чередуя 3 цвета (цвета выберите сами).
//
// Вызови функцию, передав туда случайное число от 5 до 25
//
// Пример вывода:

const cheredColor = (num, chislo = 0) => {
  while (chislo !== num) {
    console.log(chalk.green(chislo));
    chislo++;
    if (chislo === num) {
      console.log(chalk.blue(chislo));
      break;
    }
    console.log(chalk.yellow(chislo));
    chislo++;
    if (chislo === num) {
      console.log(chalk.blue(chislo));
      break;
    }
    console.log(chalk.blue(chislo));
    chislo++;
  }
  console.log('Случ. число = ', num);
};

cheredColor(Math.floor(Math.random() * (25 - 5 + 1) + 5));
