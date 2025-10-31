import chalk from 'chalk';
let enterHero = '';
const spongeBob = (nameHero) => {
  switch (nameHero) {
    case 'spongebob':
      enterHero = chalk.yellow('| ( · )( · ) |');
      break;

    case 'patrick':
      enterHero = chalk.redBright('/ ( · )( · ) \\');
      break;

    case 'squidward':
      enterHero = chalk.blue('( ( · )( · ) )');
      break;

    case 'plankton':
      enterHero = chalk.green('| ( · ) |');
      break;

    case 'mr. Crabs':
      enterHero = chalk.red('|·||·|');
      break;

    default:
      enterHero = 'Неизвестное имя';
      break;
  }
  return enterHero;
};

console.log(spongeBob('mr. Crabs'));

// mapper for api

// Напишите функцию, которая, используя switch, мапит статусы API Ресторана на статусы API мобильного приложения
// согласно этой табличке. Предусмотрите значение по умолчанию Обрабатывается, на случай, если в API ресторана появится новый статус.
// На вход вашей функцииприходит статус из ресторана, а внутри, используя switch-case, выводится в консоль статус,
// который будет отображаться в мобильном приложении, при этом каждый статус должен выводиться своим цветом.

const mapper = (nameStatus) => {
  let enterMessage;
  switch (nameStatus) {
    case 'Формируются чеки':
      enterMessage = chalk.blue('Обрабатывается');
      break;

    case 'Назначаются повара':
      enterMessage = chalk.blue('Обрабатывается');
      break;

    case 'Запекается':
      enterMessage = chalk.yellow('Готовится');
      break;

    case 'Нарезается':
      enterMessage = chalk.yellow('Готовится');
      break;

    case 'Варится':
      enterMessage = chalk.yellow('Готовится');
      break;

    case 'Жарится':
      enterMessage = chalk.yellow('Готовится');
      break;

    case 'Поиск курьера':
      enterMessage = chalk.yellow('Готовится');
      break;

    case 'Курьер берёт заказ':
      enterMessage = chalk.blue('У курьера');
      break;

    case 'Курьер в пути':
      enterMessage = chalk.blue('У курьера');
      break;

    case 'Курьер подъезжает':
      enterMessage = chalk.blue('У курьера');
      break;

    case 'Клиент отказался от заказа':
      enterMessage = chalk.green('Готов');
      break;

    case 'Заказ доставлен':
      enterMessage = chalk.green('Готов');
      break;

    default:
      enterMessage = chalk.blue('Обрабатывается');
      break;
  }
  return enterMessage;
};

console.log(mapper('dgdgdfjg'));
console.log(mapper('Заказ доставлен'));
console.log(mapper('Нарезается'));
