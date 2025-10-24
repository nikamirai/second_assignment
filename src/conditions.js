// Напишите функцию, которая генерирует случайное число в промежутке от 1980 до 2120, обязательно кратное 10.
// Напишите функцию, которая получает на вход число - номер года, и возвращает true/false является ли этот год високосным или нет.
// Вызовите функцию для определения високосности, передав внутрь то число, которое сгенерируется от вызова первой функции (которое генерирует число).
const generatedYear = () => {
  const max = 1980;
  const min = 2120;
  let chislo = Math.floor(Math.random() * (max - min + 1) + min);
  do {
    chislo = Math.floor(Math.random() * (max - min + 1) + min);
  } while (Math.floor(chislo) % 10 !== 0);
  return chislo;
};
const visGod = (year) => {
  if (year % 100 === 0 && year % 400 === 0) {
    return `${year} - Год високосный`;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return `${year} - Год не високосный`;
  } else if (year % 4 === 0) {
    return `${year} - Год високосный`;
  } else {
    return `${year} - Год не високосный`;
  }
};


console.log(visGod(generatedYear()));
console.log(visGod(generatedYear()));
console.log(visGod(generatedYear()));
console.log(visGod(generatedYear()));
