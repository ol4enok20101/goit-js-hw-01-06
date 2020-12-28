// Задача 3-1

// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта,
// используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки('\n')

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// //Write code under this line
// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//   message += `${key} : ${user[key]} \n`;
// }

// console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

// Задача 3-2

// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число -
// количество свойств в объекте.

// Циклы не должны использоваться

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Задача 3-3

// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся
// как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let maxNumber = 0;
//   let maxName = null;
//   for (const [key, value] of Object.entries(employees)) {
//     if (value > maxNumber) {
//       maxNumber = value;
//       maxName = key
//     }
//   }
//   return maxName;
// };

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let max = Math.max(...Object.values(employees));
//   for (let employee in employees) {
//     if (employees[employee] === max) {
//       return employee
//     }
//   }
// };

// решение, которое приняла автопроверка
// Ожидается что функция вернет пустую строку для пустого объекта ???
// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let name = '';
//   let maxIndex = Math.max(...Object.values(employees));
//   for (let employee in employees) {
//     if (employees[employee] === maxIndex) {
//       name = employee;
//     }
//   }
//   return name;
// };

// // // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// Задача 3 - 4

// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   'use strict';
//   // Write code under this line
//   let total = 0;
//   const salaries = Object.values(employees);

//   for (const salary of salaries) {
//     total += salary;
//   }
//   return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// }
// console.log(countTotalSalary(supports));
// // 500

// Задача 3 - 5

// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop),
//   которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop
// из каждого объекта в массиве.

// Используй метод push для добавления значения в массив
// и оператор in для проверки наличия свойства в объекте.

// Сначала перебери массив, внутри перебери объект, найденное свойство добавляй в новый масив его и верни
// у меня двойной цикл (сначала for...of, потом for...in) и сравнение, и одна переменная - новый массив, в который записываю значение свойства
// находишь индекс , по индексу  определяешь значение, вот и все.
// 1. Перебираем массив объектов.
// 2. С помощью in проверяем, есть ли необходимое нам значение у свойства.
// 3. Условием, если true - пушим в новый массив, который мы и должны вернуть.
// Проверка с помощью in это if ("значение" in "свойство")?
// Я правильно понял ? Если да, добавляем в массив результатов с помощью push ?
// оператор  in можно применять отдельно без if но только  для объектов

// function getAllPropValues(array, prop) {
//   'use strict';
//   // Write code under this line 
//   let newArray = [];
//   for (let item of array) {
//     for (let value in item) {
//       if (item[value] === item[prop]) {
//         newArray.push(item[value]);
//       }
//     }
//   }
//   return newArray;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
// //  []

// Задача 3-6

// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта
// (значение свойства name).Возвращает общую стоимость продукта
// (цена, умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар')); // 9080
// calculateTotalPrice(products, 'Сканер')); // 10200
// calculateTotalPrice(products, 'Захват')); // 2400
// calculateTotalPrice(products, 'Дроид')); // 2800

// 1. Перебираем массив объектов
// 2. Сравниваем имя свойства прилитевшее из аргумента со свойствами в массиве
// 3. Если true - делаем вычисления, умножая цену на кол-во, и запихиваем/плюсуем в ранее созданную переменную

// function calculateTotalPrice(array, prop) {
//   'use strict';
//   // Write code under this line
//   let sum = 0;
//     for (let item of array) {
//       if (item.name === prop) {
//       sum += item.price * item.quantity;
//     }
//   }
//   return sum; 
//  }


// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ]; 
// console.log(calculateTotalPrice(products, 'Радар'));  
// // 9080
// console.log(calculateTotalPrice(products, 'Сканер')); 
// // 10200
// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400
// console.log(calculateTotalPrice(products, 'Дроид')); 
// // 2800