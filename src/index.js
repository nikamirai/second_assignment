
import {secretKey} from "./utils.js";
const d = secretKey;

// import chalk from 'chalk';
// console.log(chalk.green('Hello World!'))
// ПЕРВОЕ ЗАДАНИЕ
//
// Укажите что выведется
//
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof ''); // string
console.log(typeof 'name'); //string
console.log(typeof (1 + 1)); // number
console.log(typeof (0 * 0)); // number
console.log(typeof 0.00000540001); // number

const a = 'true';
const b = undefined;
const c = false;

console.log(typeof a); // string
console.log(typeof b); // тип не задан, undefined
console.log(typeof c); // boolean

console.log(typeof Infinity); // number
console.log(typeof NaN); // number

console.log(typeof String('1')); // string
console.log(typeof Number('1')); // number

let d;
console.log(typeof d); // undefined

d = 'NULL';
console.log(typeof d); // string

d = undefined;
console.log(typeof d); // undefined

d = 1;
console.log(typeof d); // number

console.log(typeof ""); // string
console.log(typeof ``); // string

//--------------------------------------------------

// ВТОРОЕ ЗАДАНИЕ
//
// Поупражняйтесь в приведении двух примитивных типов - строк и чисел
// (остальные пока не нужно), запустите и изучите что выводит
// код ниже и постарайтесь разобраться почему
//
let age = 10;
const size = 1.44;
const myName = 'myName';

console.log('1:', age); // число есть число
console.log('2:', String(age)); // в строке могут быть числа
// выводится число как строка
console.log('3:', age); // число есть число

age = String(age);

console.log('4:', age); // в строке могут быть числа. выводится число как строка

age = Number(age);

console.log('5:', age); // строка '10' при явном приведении дает число 10

console.log('6:', Number('')); // значение не задано, поэтому 0
console.log('7:', String(Number(''))); // значение не задано, поэтому 0. когда явно преобразовали в строку число не изменилось
console.log('8:', Number('0')); // 0
console.log('9:', Number('1')); // 1
console.log('10:', String(1)); // '1'
console.log('11:', Number(1)); // 1
console.log('12:', String(Number(String(1)))); // '1'
console.log('13:', Number(String(Number(String(1))))); // 1

console.log('14:', myName); // строка есть строка
console.log('15:', String(myName)); // строка в строку
console.log('16:', String(String(myName))); // строка в строку и еще раз в строку = строка
console.log('17:', Number(myName)); // данные не являются числом, поэтому NaN
console.log('18:', String(Number(myName))); // первое преобразование дало результат - NaN, при преобразовании NaN в строку будет NaN

console.log('19:', String(size)); // 1.44
console.log('20:', Number('12.45')); //12.45
console.log('21:', Number('12,45')); // "," не используется для того, чтобы отделить целую часть числа от остатка,
// используется ".", поэтому NaN