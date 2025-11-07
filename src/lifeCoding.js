/*
Напишите функцию, которая получает на вход слово, а возвращает true/false - является ли эти это слово палиндромом (то есть читается наоборот или нет)
Ф-ция должна поддерживать слова только длиной 5 символов, если на вход получено слово другой длины - вернуть null
*/

// const proverka = (slovo) => {
//   if (slovo.length !== 5) {
//     return null;
//   }
//
//   return slovo[0] === slovo[4] && slovo[1] === slovo[3];
// };
// console.log(proverka('кабан'));
// console.log(proverka('кабан'));
// console.log(proverka('аба'));

///*
// Напишите ф-цию, которая получает на вход 2 числа и возвращает true/false - являются ли они близнецами
//
// Функция должна работать только с трехзначными числами, если получено не трехзначное число - вернуть null
// */

const isTwins = (firstNumber, secondNumber) => {
  if (firstNumber >= 1000 || firstNumber < 100 || secondNumber < 100 || secondNumber >= 1000) {
    return null;
  }
  const fNum = Math.floor(firstNumber / 100);
  const eNum = Math.ceil(firstNumber % 10);
  const mNum = (firstNumber - fNum * 100 - eNum) / 10;

  const fNum2 = Math.floor(secondNumber / 100);
  const eNum2 = Math.ceil(secondNumber % 10);
  const mNum2 = (secondNumber - fNum2 * 100 - eNum2) / 10;

  return fNum === eNum2 && mNum === mNum2 && eNum === fNum2;
};

console.log(isTwins(123, 321)); // true
console.log(isTwins(222, 222)); // true
console.log(isTwins(456, 456)); // false
console.log(isTwins(12, 21)); // null
