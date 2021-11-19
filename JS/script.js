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


let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}


do {
  console.log(num);
  num++;
}
while (num < 55);


let numTwo = 50;

for (let i = 1; i < 8; i++) {
  if (i === 6) {
    // break;
    continue; //Пропускает шаг который нам не нужно но при эотм не прерывает цикл
  }
  console.log(i);
}