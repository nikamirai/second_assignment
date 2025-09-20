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