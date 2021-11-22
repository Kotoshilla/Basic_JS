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


let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  }
} 

start();

const personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMoveDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();



function detectPersonalLevel() {
  if (personalMoveDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
  } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMoveDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMoveDB);
  }
}

showMyDB(personalMoveDB.privat);

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    personalMoveDB.genres[i - 1] = prompt( `Ваш любимый жанр под номером ${i}`);
  }
}


writeYourGenres();

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








