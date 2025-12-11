/*
Напишите функцию, которая получает на вход список пользователей, а возвращает объект, в котором подсчитано с каким возрастом сколько людей.
Вы должны повторить такой вывод:
Возраст=25. Количество людей=3
Возраст=28. Количество людей=2
Возраст=30. Количество людей=3
Возраст=35. Количество людей=1
Возраст=41. Количество людей=1
 */

const ageAndPeople = (listOfUser) => {
  const ageAndCount = {};
  for (let j = 0; j < listOfUser.length; j++) {
    if (ageAndCount[listOfUser[j].age]) {
      ageAndCount[listOfUser[j].age] += 1;
    } else {
      ageAndCount[listOfUser[j].age] = 1;
    }
  }
  for (const person in ageAndCount) {
    console.log(`Возраст=${person}. Количество людей=${ageAndCount[person]}`);
  }
};

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 35 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 25 },
  { name: 'Hannah', age: 41 },
  { name: 'Ivy', age: 30 },
  { name: 'Jack', age: 28 },
];

ageAndPeople(users);
