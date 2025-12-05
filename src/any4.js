/*
Написать ф-цию generatePassword, которая генерирует пароль, согласно заданным настройкам.

Пока что будет поддерживаться только одна настройка - длина пароля.

Функция должна отдавать пароль, состоящий из случайных маленьких и больших букв, а так же чисел.
Длина пароля должна быть такая, какую попросил пользователь.

После того, как задание выше 👆 будет сделано, необходимо добавить новые настройки:
Теперь помимо длины, так же можно настраивать маленькие/большие буквы, цифры, спец символы.
То есть пользователь в настройках может например передать:
1. длина 10, "маленькие буквы - запрещены, цифры и символы - разрешены" - и сгенерированный пароль должен соответствовать этим настройкам
2. Или например длина 6 "маленькие - запрещены, большие запрещены, цифры запрещены" - и пароль должен быть сгенерен только из спец символов
 */
const generatePassword = (lenghtPass, littleAlpha, bigAlpha, chisla, specSimbol) => {
  const alphabetBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLittle = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
  const number = '0123456789';
  const simbol = '!@#$%^&*()~/';
  let password = '';

  if (!littleAlpha && !bigAlpha && !specSimbol && !chisla) {
    return NaN;
  }

  //получаем от пользователя количество параметров после чего делим их на количество символов в пароле. (нафига? чтоб все символы были задействованы) //памятка для меня
  //например, пароль 4 символа, выбраны 3 параметра (при делении очевидно будет остаток),
  // нужно последнему (или случайному символу +1 символ сделать) //да я не русский

  let kolPoint = 0;
  if (littleAlpha) {
    kolPoint++;
  }
  if (bigAlpha) {
    kolPoint++;
  }
  if (chisla) {
    kolPoint++;
  }
  if (specSimbol) {
    kolPoint++;
  }
  const kolSimbol = lenghtPass / kolPoint; // общее количество символов
  let kolOstSimbol; //понять какой последний

  if (littleAlpha) {
    for (let i = 0; i < Math.ceil(kolSimbol); i++) {
      const randomLittleAlpha = Math.floor(Math.random() * alphabetLittle.length);
      password += alphabetLittle[randomLittleAlpha];
    }
    kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
  }

  if (bigAlpha) {
    if (lenghtPass !== kolOstSimbol) {
      // уже юзанулась привелегия +1 символ к карме
      for (let i = 0; i < Math.floor(kolSimbol); i++) {
        const randomBigAlpha = Math.floor(Math.random() * alphabetBig.length);
        password += alphabetBig[randomBigAlpha];
      }
      kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
    } else {
      // не юзалась
      for (let i = 0; i < Math.ceil(kolSimbol); i++) {
        const randomBigAlpha = Math.floor(Math.random() * alphabetBig.length);
        password += alphabetBig[randomBigAlpha];
      }
      kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
    }
  }

  if (chisla) {
    if (lenghtPass !== kolOstSimbol) {
      // уже юзанулась привелегия +1 символ к карме
      for (let i = 0; i < Math.floor(kolSimbol); i++) {
        const randomChisla = Math.floor(Math.random() * number.length);
        password += number[randomChisla];
      }
      kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
    } else {
      // не юзалась
      for (let i = 0; i < Math.ceil(kolSimbol); i++) {
        const randomChisla = Math.floor(Math.random() * number.length);
        password += number[randomChisla];
      }
      kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
    }
  }

  if (specSimbol) {
    if (lenghtPass !== kolOstSimbol) {
      // уже юзанулась привелегия +1 символ к карме
      for (let i = 0; i < Math.floor(kolSimbol); i++) {
        const randomSimbol = Math.floor(Math.random() * simbol.length);
        password += simbol[randomSimbol];
      }
      kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
    } else {
      // не юзалась
      for (let i = 0; i < Math.ceil(kolSimbol); i++) {
        const randomSimbol = Math.floor(Math.random() * simbol.length);
        password += simbol[randomSimbol];
      }
      kolOstSimbol = lenghtPass - Math.ceil(kolSimbol); //выясняем сколько символов осталось добить
    }
  }

  console.log(password);
};

generatePassword(5, true, true, true, true);
generatePassword(6, false, false, false, true); //пароль должен быть сгенерен только из спец символов

//оставила на память код генерирующий числа и буквы

// const generatePassword = (lenghtPass, littleAlpha, bigAlpha, chisla, specSimbol) => {
//   const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
//   const number = '0123456789';
//   let password = '';
//
//   if (!littleAlpha && !bigAlpha && !specSimbol && !chisla) {
//     return NaN;
//   }
//
//   for (let i = 0; i < lenghtPass; i++) {
//     const randomChisloAlpha = Math.floor(Math.random() * alphabet.length);
//     const randomChislo = Math.floor(Math.random() * number.length);
//     const randomValue = Math.ceil(Math.random() * 2);
//     if (randomValue === 1) {
//       password += alphabet[randomChisloAlpha];
//     }
//     if (randomValue === 2) {
//       password += number[randomChislo];
//     }
//   }
//   console.log(password);
// };
