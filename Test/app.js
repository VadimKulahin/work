// //  задача #1 
// // какое число (длину) мы получим ?

// let arr = ['Ivan', 'Ania', 'Aga',];
// arr.push('Petia');

// console.log(arr);


// // задача #2
// // создайте массив users элементами "Ivan" и "Ania" добавьте "Aga" в конце 
// //замените значение "Ania" на "Petia" ваш код для поиска значение должен работать для массивов 
// //с любой длиной, удалите первый элемент массива и покажите его вставьте "Misha" и "Pasha" в начало массива.

// let users = ['Ivan', 'Ania', 'Aga',];
// users.splice(1, 1, 'Petia');
// users.splice(0, 1, 'Misha', 'Pasha');
// console.log(users);


// // задача #3
// // удалите элемент "Ania" и возвратить его в переменнаю

// let arrOne =['Ivan', 'Ania', 'Aga',];
// arrOne.splice(1, 1);
// console.log(arrOne);

// let arrTwo = ['Ivan','Ania','Aga',];
// let removed = arrTwo.splice(1, 1);
// console.log(removed);


// // задача #4 
// // сделать из строки массив 

// let str = 'Ivan, Ania, Aga';

// let arrThree = str.split(',', 3);
// console.log(arrThree);


// // задача #5
// // Чему равен previousValue в начале работы метода 

// let arrFour = [9, 2, 8,];
// let reduceValue = arrFour.reduce(function(previousValue, item, index, array){
//     console.log(previousValue);
// });



