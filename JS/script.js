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



// const arr = [11, 2, 16, 3, 7, 22, 31, 4, 95];

// arr.pop(); // Удоляет последний элемент в массиве
// arr.push(87); // Добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr[99] = 0;
// console.log(arr.length);
// //покажет 100 в массиве даже если значений меньше
// //Так как в JS свойство length состоит из последего значения и +1
// //Если вывести в консоль массив то он покажет много пустых ячеек


// const arrTwo = [12, 54, 7, 87, 4, 5, 3, 9, 7];

// arrTwo.forEach(function(item, i, arrTwo) {
//   console.log(`${i}: ${item} Внутри массива ${arrTwo}`);
// });// Перебирает массив методом forEach



// const str = prompt('', '');
// const products = str.split(', '); // Создает массив и из промпта добавляет значения через запятую в него


// console.log(products);


// const strTwo = prompt('', '');
// const productsTwo = strTwo.split(', '); // Создает массив и из промпта добавляет значения через запятую в него
// productsTwo.sort();// Отсортирует в алфавитном порядке (сортирует от первого значения цифр если массив с ними)
// productsTwo.sort(compareNum); //можно в метод вставить колбек функцию и теперь все отсортируется по возрастанию

// console.log(productsTwo.join('; ')); // из созданного массива делает строку
//                                       //В консоле получаем строку через точку с запятой
// function compareNum(a, b) {
//   return a - b;
// }




/*Передача по ссылке или по значению*/
/*Spread операторы (ES-ES9)*/




// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;// Не копирует, а передает ссылу на объект

// copy.a = 10;// Модифицируя копию, мы модифицируем и основной объект
// //Такое поведение и называется передача по ссылке

// console.log(copy);
// console.log(obj);



// function copyObj(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copyObj(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// //Так через циклы можно скопировать объект поверхностно

// const add = {
//     a: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));


// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// //Клонирование массива

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 12;
// console.log(newArray);
// console.log(oldArray);



// const video = ['youtube', 'vimio', 'rutube'],
//       blogs = ['wordpress', 'livejurournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 6];

// log(...num);


// const arrayTwo = ['a', 'b'];
// const NewArrayTwo = [...arrayTwo];


// const newObjTwo = {
//     one: 1,
//     two: 2
// };

// const newObjTwoClone = {...newObjTwo};

// console.log(newObjTwoClone);





/* Основы ООП, прототипно-ориентировонное наследование */




// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3, 5]);



// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const JonhTwo = Object.create(soldier);
// // Современный метод прототипирования
// JonhTwo.sayHello();

// const Jonh = {
//     health: 200
// };

// Jonh.__proto__ = soldier; // В современном коде не используется

// Object.setPrototypeOf(Jonh, soldier); // Современный вариант использования прототипирования


// console.log(Jonh.armor);
// Jonh.sayHello();



///////////////////////////////////
///////////////////////////////////





// const personalMoveDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function() {
//     personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
//     while (personalMoveDB.count == '' || personalMoveDB.count == null || isNaN(personalMoveDB.count)) {
//         personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMoveDB.movies[a] = b;
//         console.log('done');
//       } else {
//         console.log('error');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function() {
//     if (personalMoveDB.count < 10) {
//       console.log('Просмотренно довольно мало фильмов');
//     } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
//       console.log('Вы классический зритель');
//     } else if (personalMoveDB.count >= 30) {
//       console.log('Вы киноман');
//     } else {
//       console.log('Произошла ошибка');
//     }
//   },
//   showMyDB: function(hidden) {
//     if (!hidden) {
//       console.log(personalMoveDB);
//     }
//   },
//   toggleVisibleMyDB: function() {
//     if (personalMoveDB.privat) {
//         personalMoveDB.privat = false;
//     } else {
//         personalMoveDB.privat = true;
//     }
//   },

//   writeYourGenres: function() {
//      for (let i = 1; i <= 3; i++) {
//         let genre = prompt( `Ваш любимый жанр под номером ${i}`);
        
//         if (genre == '' || genre == null) {
//             console.log('Вы ввели некорректные данные или не ввлели вообще')
//             i--;
//         } else {
//             personalMoveDB.genres[i - 1] = genre;
//         } 
//      }
//      personalMoveDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`)
//      });

//   }
  
// };



/*Динамическая типизация в JS*/



// // To String

// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(5)));


// //2)
// console.log(typeof(5+''));


// const num = 5;

// console.log("https://vk.com/catalog/" + num);


// const fontSize = 26 + 'px';



// // To Number 

// // 1)
// console.log(typeof(Number('4')));

// //2)
// console.log(typeof(+'5'));

// //3)
// console.log(typeof(parseInt('15px', 10)));


// let answ = +prompt('Hello', '');


// // To boolean

// // 0, '', null, undefined, NaN; = false

// // 1)

// let switcher = null;

// if (switcher) {
//   console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//   console.log('Working...');
// }

// // 2)

// console.log(typeof(Boolean('4')));

// //3)

// console.log(typeof(!!'4444'));




/* Получение элементов со сраницы */


                                  
// const box = document.getElementById('box'); //Выводит элемент по ID

// console.log(box);


// const btns = document.getElementsByTagName('button'); //Выведит колекцию с этим тегом в виде массива
// const btnsTwo = document.getElementsByTagName('button')[1]; //Через квад.скобки выводит тот что по индексу

// console.log(btns);
// console.log(btns[0]);// чтоб не получить массив нужно обращаться через индекс
// console.log(btnsTwo);


// const circles = document.getElementsByClassName('circle'); //Выводит элементы по классу 
//                                                            //Не нужно ставть точку перед классом
// console.log(circles[1]);


// //Более современые методы

// const hearts = document.querySelectorAll('.heart'); //Поиск селекторов 
// //в скобках пишется так как бы вы искали в CSS, то есть через точки, решетки 
// console.log(hearts); //querySelectorAll имеет метод ForEach, но это так же псевдомассив
// hearts.forEach(item => {
//   console.log(item);
// });

// const oneHeart = document.querySelector('.heart');//поиск первого селектора с таким именем

// console.log(oneHeart);



/* Действия с элементами на странице */



// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
//       oneHeart = document.querySelector('.heart'),
//       wrapper = document.querySelector('.wrapper'); 

// box.style.backgroundColor = 'yellowgreen'; 
// box.style.width = '500px'; 

// box.style.cssText = 'background-color: purple; width: 500px';// Тут уже обращаются как в css

// btns[2].style.borderRadius = '100%';

// /*circles.style.backgroundColor = 'red';*/ //Будет ошибка 
// //так как он обращается не к опр элементу, а к псевдомассиву 
// //Нужно указать четко на тот элемент что будет изменяться


// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'Brown';
// // } 

// hearts.forEach(item => {
//     item.style.backgroundColor = 'yellowgreen';
// }); //Лучше использовать спец методы 


// const div = document.createElement('div'); //Создеат внутри JS, на странице он не будет виден
// // const text = document.createTextNode('Тут был я'); // Такой текст уже появиться на странице

// div.classList.add('black'); //Добавляем нами созданному диву класс 

// document.body.append(div);//Добавляет в конец боди нами созданный DIV
// wrapper.append(div); //Добавляет в конец wrapper
// wrapper.prepend(div); //Добавляет в перед 

//  hearts[0].before(div); //Добавлет перед классом наш DIV
//  hearts[0].after(div);  //Добавлет после первого сердца наш DIV

//  circles[0].remove(); //Удоляет выюрнный элемент

//  hearts[1].replaceWith(circles[1]); //Меняет местами элементы  

// //Команды которые немного устарели

// wrapper.appendChild(div); //Добавляет в конец Div
// wrapper.insertBefore(div, hearts[0]); //Добавляет перед классом Hearts[0] нвш Div
// wrapper.removeChild(hearts[2]); //Удоляет выбранный элемент
// wrapper.replaceChild(circles[1], hearts[0]); //Меняет местами

// div.innerHTML = "<h1>Hello</h1>"; //Можно добавить текст и Html стркутуру внуть Divа
// div.textContent = "Hello"; //Добавляет текст

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>HelloTwo</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>HelloThree</h2>');
// div.insertAdjacentHTML('afterend', '<h2>HelloFour</h2>');




/* События и их обработчики */




// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// // btn.onclick = function() {
// //     alert('Click');
// // };  //лучше не использвать такой варинат 

// // btn.addEventListener('click', () => {
// //     alert('Click');
// // });

// // btn.addEventListener('click', () => {
// //     alert('Second Click');
// // });

// // let i = 0;
// const deletElement = (event) => {
//     console.log(event.currentTarget);
//     console.log(event.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deletElement);
//     // }
// };

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     console.log('Hover');
// });

// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);
// //Всплытие событий - когда срабатывает на самом вложеном элементе и вверх по иерархии

// btns.forEach(btn => {
//     btn.addEventListener('click', deletElement, {once: true});
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });




/* Навигация по DOM - элементам, data-атрибуты, преимущество for/of   */




// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); 
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

//  console.log(document.querySelector('[data-current="3"]').nextSibling);
//  console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
    
//     console.log(node);
// }




/* События на мобильных устройствах */




// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.changedTouches);
    });
});


// touches // Получение списка всех пальцев котрые на экране 
// targetTouches // вывод пальца котрый взаимодействует именно с этим элементом
// changedTouches // Список пальцев участвовуют в текушем событии
