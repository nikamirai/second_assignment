import chalk from 'chalk';
const tomatoPrice = (weight) => {
  return weight * 450;
};

console.log(tomatoPrice(100));
console.log(tomatoPrice(0.65));

// Совершеннолетний или нет
// Напишите функцию, которая получается на вход число, и возвращает true или false, указывая является ли пользователь совершеннолетним или нет.
// Если да - выведите сообщение зелёным цветом, если нет - красным.
// Вызовите функцию и передайте внутрь рандомное число от 15 до 22.

const sovershen = (age) => {
  if (age >= 18) {
    return `Твой возраст ${age}, ты совершеннолетний`;
  } else {
    return `Твой возраст ${age}, не совершеннолетний`;
  }
};
const max = 22;
const min = 15;
console.log(sovershen(Math.floor(Math.random() * (max - min + 1)) + min));

// Напишите функцию, которая принимает на вход число, и возвращает:
// Fizz, если число делится нацело на 3
// Buzz, если число делится нацело на 5
// FizzBuzz если число делится и на 3 и на 5
// Вызовите функцию и передайте туда случайное число от 9 до 20 и выведите результат

const neZnauTakixSlov = (chislo) => {
  if (chislo % 3 === 0) {
    return 'Fizz';
  } else if (chislo % 5 === 0) {
    return 'Buzz';
  } else if (chislo % 3 === 0 && chislo % 5) {
    return 'FizzBuzz';
  } else {
    return 'Число не Buzz, не Fizz и не FizzBuzz';
  }
};

const max1 = 20;
const min1 = 9;
console.log(neZnauTakixSlov(Math.floor(Math.random() * (max1 - min1 + 1)) + min1));