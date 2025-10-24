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
