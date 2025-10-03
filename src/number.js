/*
Ваш заказчик имеет продуктовый магазин с примитивным кассовым аппаратом.
Заказчик уклоняется от налоговой, поэтому все расчёты производятся только наличными деньгами.
Кассиры плохо умеют распределять какое количество купюр необходимо дать сдачи, например,
выдать сдачу в 6.000 рублей они могут 60-тью купюрами по 100 рублей, или 120-ю купюра по 50 рублей,
из-за этого в кассе постоянно не хватает купюр для сдачи, ведь 6.000 руб сдачи проще выдать,
отдав клиенту 5.000 + 1.000, и тогда потратится всего 2 банкноты.

Вам необходимо написать функцию, которая помогает дать сдачу наименьшим количеством купюр.
Функция принимает на вход сумму сдачи, а возвращает посчитанное количество купюр, которое необходимо дать клиенту для сдачи.
Вы должны определить как можно выдать сдачу НАИМЕНЬШИМ КОЛ-ВОМ купюр!
Поддерживаются купюры - 5000, 2000, 1000, 500, 100, 50, 10
И рубли по 1 рублю
Сообщение необходимо вывести зелёным цветом, а кол-во купюр синим, примеры вывода есть в скриншотах ниже

--- Как посчитать количество купюр?
Всё просто - сначала посчитайте сколько нужно "старших" купюр, а потом вычтите из общей суммы "старшие купюры",
затем перейдите к купюрам помладше. Например:
Если сдача 699 руб, то кол-во купюр можно посчитать так:
- 5000 - 0 шт
- 2000 - 0 шт
- 1000 - 0 шт
- 500 - 1 шт, 699 - 500 = 199 руб осталось распределить по купюрам
- 100 - 1 шт, 199 - 100 = 99 руб  осталось распределить
- 50 - 1 шт, 99 - 50 = 49 руб  осталось распределить
- 10 - 4 шт, 49 - 40 = 9 руб  осталось
Итого ответ:
500 - 1
100 - 1
50 - 1
10 - 4
1 - 9 */

//остаток от подсчета
let ostatok;
let initialSubmission;

//Купюры
const fiveThousand = 5000;
const twoThousand = 2000;
const oneThousand = 1000;
const fiveHundred = 500;
const hundred = 100;
const fifty = 50;
const ten = 10;
const one = 1;

//Количество купюр

let kolFiveThousand = 0;
let kolTwoThousand = 0;
let kolOneThousand = 0;
let kolFiveHundred = 0;
let kolHundred = 0;
let kolFifty = 0;
let kolTen = 0;
let kolOne = 0;

//Функция подсчета
const podschetDeneg = (ostatok = sdacha) => {
  initialSubmission = ostatok;
  kolFiveThousand = 0;
  kolFifty = 0;
  kolTen = 0;
  kolOne = 0;
  kolFiveHundred = 0;
  kolHundred = 0;
  kolFiveHundred = 0;
  for (let i = 0; ostatok > 0; i++) {
    if (ostatok >= 5000) {
      ostatok -= 5000;
      kolFiveThousand += 1;
      continue;
    }
    if (ostatok >= 2000) {
      ostatok -= 2000;
      kolTwoThousand += 1;
      continue;
    }
    if (ostatok >= 1000) {
      ostatok -= 1000;
      kolOneThousand += 1;
      continue;
    }
    if (ostatok >= 500) {
      ostatok -= 500;
      kolFiveHundred += 1;
      continue;
    }
    if (ostatok >= 100) {
      ostatok -= 100;
      kolHundred += 1;
      continue;
    }
    if (ostatok >= 50) {
      ostatok -= 50;
      kolFifty += 1;
      continue;
    }
    if (ostatok >= 10) {
      ostatok -= 10;
      kolTen += 1;
      continue;
    }
    if (ostatok >= 1) {
      ostatok -= 1;
      kolOne += 1;
      continue;
    }
  }
  return console.log(
    '\n Сумма - ' +
      initialSubmission +
      '\n 5000 - ' +
      kolFiveThousand +
      '\n 2000 - ' +
      kolTwoThousand +
      '\n 1000 - ' +
      kolOneThousand +
      '\n 500 - ' +
      kolFiveHundred +
      '\n 100 - ' +
      kolHundred +
      '\n 50 - ' +
      kolFifty +
      '\n 10 - ' +
      kolTen +
      '\n 1 - ' +
      kolOne +
      '\n Остаток ' +
      ostatok +
      '\n------------------------------',
  );
};
console.log(podschetDeneg(100));
console.log(podschetDeneg(6579));

// ПОСЧИТАТЬ ПЛОЩАДЬ

//Напишите функцию, которая получат на вход сторону квадрата, а возвращает площадь квадрата.
//Размер стороны квадрата сгенерируйте самостоятельно, она должна быть целым число от 1 до 10, передайте его в функцию.
//Выведите примерно такое сообщение (цифры должны быть ваши)

const randomChislo = Math.ceil(Math.random() * 10);
console.log('Сторона квадрата - ' + randomChislo + '\nПлощадь квадрата - ' + randomChislo * randomChislo);
