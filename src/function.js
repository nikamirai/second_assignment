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
