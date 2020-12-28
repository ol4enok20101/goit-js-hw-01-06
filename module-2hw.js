// Задача 2-1

// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку,
// полученную из объединения (конкатенации) строк в формате
// ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
// а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for

// const getItemsString = function (array) {
//     'use strict';
//     // Write code under this line
//     let result = '';
//     for (let i = 0; i < array.length; i += 1) {
//         result = result + `${i + 1} - ${array[i]}\n`;
//     };
//     return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// /*
//   '1 - Mango
//   2 - Poly
//   3 - Ajax
//   4 - Lux
//   5 - Jay
//   6 - Kong
//   '
//   */

// console.log(getItemsString([5, 10, 15]));
// /*
//   '1 - 5
//   2 - 10
//   3 - 15
//   '
//   */

// //  Задача 2-2

//  Подсчет стоимости гравировки украшений
//  Напиши скрипт подсчета стоимости гравировки украшений.
//  Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0),
//  принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова,
//  и возвращающую цену гравировки всех слов в строке.

//  Для решения этой задачи не используйте циклы.
//  Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(' ').length;

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// Задача 2-3

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// function findLongestWord(string = "") {
//     // Write code under this line
//     let longestWord = '';
//     let wordArray = string.split(' ');

//     for (const word of wordArray) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// function findLongestWord(string = ' ') {
//   let words = string.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// console.log(findLongestWord('Google do a roll'));
// // 'Google'

// console.log(findLongestWord('May the force be with you'));
// // 'force'

// Задача 2-4

// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40),
// которая принимает строку и форматирует ее, если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов
// и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

// function formatString (string, maxLength = 40) {

//     const dots = '...';
//     return string.length >= maxLength ? string.slice(0, maxLength).concat(dots) : string;
// }

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let words = string.split('');
//   const dots = '...';
//   if (words.length <= maxLength) {
//     return string;
//   } else words.length > maxLength;
//   return string.slice(0, maxLength) + dots;
// }

// неправильное решение
// function formatString(string, maxLength = 40) {
//     // Write code under this line
//     const letterArray = string.split('');
//     const dots = '...';
//     return letterArray <= maxLength ? string : string.slice(0, maxLength).concat(dots);
// }

//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // 'Curabitur ligula sapien, tincidunt non.'

//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // 'Vestibulum facilisis, purus nec pulvinar...'

//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
//   // 'Vestibulum facilisis, purus ne...'

// Задача 2-5

// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// function checkForSpam (str) {
//     'use strict';

//     const spamWord1 = 'spam';
//     const spamWord2 = 'sale';
//     str = str.toLowerCase();

//     if (str.includes(spamWord1) || str.includes(spamWord2)) {
//       return true;
//     } else return false;
// }

// function checkForSpam(str) {
//   'use strict';
//   // Write code under this line
//   const searchWord1 = 'spam';
//   const searchword2 = 'sale';
//   str = str.toLowerCase();
//   const string =
//     str.includes(searchWord1) || str.includes(searchword2) ? true : false;
//   return string;
// }

//   console.log(checkForSpam('Latest technology news')); // false

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

//   console.log(checkForSpam('Get best sale offers now!')); // true

//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Задача 2-6

// Конструкция new Array(10) создаст массив длинной в 10 элементов.
// Значения в таком массиве будут отсутствовать, т.е. не будет даже undefined,
// поэтому такой массив нужно заполнить значениями для дальнейшего использования.

// Есть еще способ создания и заполнения массива - можно создать пустой массив [] и заполнять его методом push().

// Быстрая обработка массива
// Преимущество создания массива заданной длины перед добавлением в пустой массив в том, что метод push() медленнее обрабатывается.
// Если `new Array()` будет содержать более одного аргумента, то будет создан массив с элементами из аргументов.

// Пример:
// new Array(3);
// // [,,]

// new Array(1, 2, 3);
// // [1, 2, 3]

// Быстрое создание массива
// Пустой массив. Вызов new Array() создаст пустой массив [],
// но это более медленный способ создания массива по сравнению с использованием литерала.
// Если нужен пустой массив, то рекомендуется использовать литерал массива.

// const arrFast = []; // быстрее
// const arrSlow = new Array(); // медленнее

// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array
// и заполняет его числами из массива array, умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.
// По завершении перебора массива array возвращается массив numbers.

// function mapArray(array) {
//     'use strict';
//     const numbers = new Array(array.length);
//     for(let i = 0; i < array.length; i += 1) {
//         numbers[i] = array[i] * 10;
//     }
//     return numbers;
// }

//   console.log(mapArray([-2, 0, 2]));
//   // [-20, 0, 20]

//   console.log(mapArray([-2.5, 0, 2.5]));
//   // [-25, 0, 25]

// Задача 2-7

// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite).
// Для проверки используй цикл for. Числа добавляются в новый массив numbers с помощью метода push,
// а не числа - игнорируются. По завершению проверки массива array возвращается массив numbers.

// function filterArray(array) {
//     'use strict';

//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (Number.isFinite(array[i])) {
//             numbers.push(array[i]);
//         }

//     }
//     return numbers;
// }

// // непонятный код
// // function filterArray(array) {
// //     'use strict';
// //     const numbers = [];
// //     for (let i = 0; i < array.length; i += 1) {
// //         // Write code under this line
// //         Number.isFinite(array[i]) ? numbers.push(array[i]) : 0;
// //     }
// //     return numbers;
// // }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => { }, 2]));
// [2]

// Задача 2-8

// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.
// Для подсчета суммы используй переменную total. Функция должна возвращать 0 если массив пустой и значение total в противном случае.

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   for(let i=0; i < array.length; i += 1){
//     total += array[i];
// }

//   return total;
// };

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// Задача 2-9

// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false
// в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры
// и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код
// и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// function isLoginValid (login, min = 4, max = 16) {

//   const validLogin = login.length >= min && login.length <= max ? true : false;
//   return validLogin;
// }

// function isLoginUnique (allLogins, login) {
//   'use strict';

//   return allLogins.includes(login) ? false : true;
// }

// function addLogin (allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;

//   if (isLoginValid(login) === false) {
//     return message = ERROR;
//   } else if (isLoginUnique(allLogins, login) === true) {
//     allLogins.push(login);
//     return message = SUCCESS;
//   }
//   return message = REFUSAL;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
