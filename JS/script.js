"use stict";

// const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMoveDB = {
//   count: numberOfFilm,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', '')
//       d = prompt('На сколько оцените его?', '');

// personalMoveDB.movies[a] = b;
// personalMoveDB.movies[c] = d;

// console.log(personalMoveDB);




 /*Условия*/




// if (4==9) { 
//   console.log('Верно!'); //если 4 равен 9 то выполниться эта команда
// } else { 
//   console.log('Error'); // в противном случае будеь выполнена эта строка кода
// }

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Больше 100');
// } else {
//   console.log('Ok');
// }

// (num === 60) ? console.log('Ok') : console.log('Error'); //Тернарный оператор когода условий 3 

// const numTwo = 45;

// switch (numTwo) {
//   case 49:
//     console.log('Неверно');
//     break;
//   case 100:
//     console.log('Неверно');
//     break;
//   case 15:
//     console.log('В точку!');
//     break;
//   default:
//     console.log('Ни один из кейсов не прошел');
// }


/*Циклы*/


// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }


// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);


// let numTwo = 50;

// for (let i = 1; i < 8; i++) {
//   if (i === 6) {
//     // break;
//     continue; //Пропускает шаг который нам не нужно но при эотм не прерывает цикл
//   }
//   console.log(i);
// }


// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   }
// } 

// start();

// const personalMoveDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };



// function rememberMyFilms () {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMoveDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//   if (personalMoveDB.count < 10) {
//     console.log('Просмотренно довольно мало фильмов');
//   } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMoveDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//   if (!hidden) {
//     console.log(personalMoveDB);
//   }
// }

// showMyDB(personalMoveDB.privat);

// function writeYourGenres () {
//   for (let i = 1; i <= 3; i++) {
//     personalMoveDB.genres[i - 1] = prompt( `Ваш любимый жанр под номером ${i}`);
//   }
// }


// writeYourGenres();

/*Функции, стрелочные функции*/

// let num = 20; //глобальная переменная 

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10; // локальная переменная (видна только внутри функции)
//   console.log(num);
// }


// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(12, 5));
// console.log(calc(45, 5));
// console.log(calc(1, 5));

// function ret () {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// //Function expression

// const logger = function () {
//   console.log('Hello');
// };

// logger();

// // Стрелочныая фуикция

// const calculate = (a, b) => a + b;

// const calculateTwo = (a, b) => {
//   console.log('1');
//   return a + b;
// };




/*Методы и свойства сторок и чисел */




// const str = 'test';
// const arr = [1, 2, 3];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);

// console.log(str.toUpperCase()); //Верхний регистр 
// console.log(str.toLowerCase()); //Нижний регистр


// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));  //Поиск куска строки или буквы в утри куска строки


// const logg = 'Hello world';

// console.log(logg.slice(6, 11)); //Выризает часть текста по индексу
// //если указать только с какого момента то текст будет выризаться до конца
// console.log(logg.slice(-6, -1));// Можно использовать и отрицательное значене 

// console.log(logg.substring(6, 11)); // Тоже вырезает но не может использовать отрицательные значения

// console.log(logg.substr(6, 5)); //говорит с какого индекса и количество строк для вырезания



// const num = 12.2;

// console.log(Math.round(num)); //Округляет число до ближайшего целого



// const test = '12.2px';

// console.log(parseInt(test)); //Привращает число в другую систему исчисления
// console.log(parseFloat(test)); //Изначально служит для того чтоб вернуть строку или число в десятичном варианте
// //Возвращяет с дробными значениями




/*Callback функции*/ //это функция когда другая функция завершила своке выполение





// function first() {
//   //Do something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();



// function learnJS (lang, Callback) {
//   console.log(`Я учу: ${lang}`);
//   Callback();
// }

// function done () {
//   console.log('я прошел этот урок!');
// }

// learnJS('JavaScript', done);





/*ОбЪекты, деструктуризация объектов (ES6)*/





// const obj = new Object(); //можно создавать объект так, но лучше так не делать


// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   }
// };

// console.log(options.name);

// delete options.name; //так можно удалить опр ключ

// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значеие ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }// Метод перебора объектов и объектов внутри объекта

// console.log(counter); //можно посчитать сколько свойств в объекте

// const optionsTwo = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//       border: 'black',
//       bg: 'red'
//     }
//   };

//   console.log(Object.keys(optionsTwo).length); //показывает количество 
  

//   const objGame = {
//     name: 'Tekken JP',
//     age: 1994,
//     price: '?',
//     genre: 'Fighting',
//     studio: 'Bandai Namco Studios',
//     platform: {
//       PlayStation: true,
//       Android: true,
//       Xbox: false

//     }
//   };


//   for (let key in objGame) {
//       console.log(`свойство ${key} имеет значение ${objGame[key]}`);
//   } //метод перебора объекта

//   console.log(Object.keys(objGame).length);  //Простой способ посчитать кол-во ключей в обьекте



//   const objGameTwo = {
//     name: 'Mortal Kombat',
//     age: 1992,
//     price: '?',
//     genre: 'Fighting',
//     studio: 'Midway Games',
//     platform: {
//       PlayStation: true,
//       Android: true,
//       Xbox: true
//     },
//     makeTest: function() {
//       console.log('Test');
//     } //Так создают свои методы внутри объекта 
//   };

//   objGameTwo.makeTest();


//   const {PlayStation, Xbox} = objGameTwo.platform; //Деструктуризация 
// //(вытаскивает кусочки свойств из объекта в качестве отдельной переменной)
//   console.log(PlayStation);




/*Массивы и Псевдомассивы*/



const arr = [11, 2, 16, 3, 7, 22, 31, 4, 95];

arr.pop(); // Удоляет последний элемент в массиве
arr.push(87); // Добавляет элемент в конец массива

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

arr[99] = 0;
console.log(arr.length);
//покажет 100 в массиве даже если значений меньше
//Так как в JS свойство length состоит из последего значения и +1
//Если вывести в консоль массив то он покажет много пустых ячеек


const arrTwo = [12, 54, 7, 87, 4, 5, 3, 9, 7];

arrTwo.forEach(function(item, i, arrTwo) {
  console.log(`${i}: ${item} Внутри массива ${arrTwo}`);
});// Перебирает массив методом forEach



const str = prompt('', '');
const products = str.split(', '); // Создает массив и из промпта добавляет значения через запятую в него


console.log(products);


const strTwo = prompt('', '');
const productsTwo = strTwo.split(', '); // Создает массив и из промпта добавляет значения через запятую в него
productsTwo.sort();// Отсортирует в алфавитном порядке (сортирует от первого значения цифр если массив с ними)
productsTwo.sort(compareNum); //можно в метод вставить колбек функцию и теперь все отсортируется по возрастанию

console.log(productsTwo.join('; ')); // из созданного массива делает строку
                                      //В консоле получаем строку через точку с запятой
function compareNum(a, b) {
  return a - b;
}

