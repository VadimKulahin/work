// // Выведение конкретного слово или значение и строки на экран.
// // преобразование : json В объект и объект json  // или по простому строку в объект и объект в строку. 


// let json = '[11, 23, 14, 21, 12, 341]'; 
// console.log(json);
// let data = JSON.parse(json);
// console.log(data);
// console.log(data[5]);

// //-------------------

// // создание пора ключ значение // iz json w {} //
// let json2 = '{"key1": "value1", "key2": "value2"}';
// // создание объекта //
// let obj = '{"key1": "value1", "key2": "value2"}';
// console.log(obj);
// // вытаскиваем значение из ключа //
// let data2 = JSON.parse(json2);
// console.log(data2);
// console.log(data2.key2);
// // возвращаем обратно из объекта w json //
// let json3 = JSON.stringify(obj)
// console.log(json3);

// //---------------------

// // из json В объект  //
// let json4 = '{"users": {"User1": {"key1": "value1", "key2": "value2"}, "User2": {"key1": "value1", "key2": "value2"}}}';
// // создаем объект //
// let data4 = JSON.parse(json4);
// console.log(data4.users.User1.key1);

// // из объекта в json //
// let json5 = JSON.stringify(json4); 
// console.log(json5);

// //----------------------


// // Function Expression Function Declaration 
// // объявление функции, и фyн выражения 


// // создание двух функций  //
// // 2 .
// console.log(sum());
// // 1 .
// function sum () {  // объявление функции 
//     return 10;
// }

// // 1 .
// let sum2 = function() {  // функциональное выражение 
//     return 20;
// }
// // 2 .
// console.log(sum2());

// //------------------------

// // Promise js - это обещание . "Находится между вызывающим кодом и выполняющим кодом задачами с асинхронным кодом"
// // есть две функции resolve - приводит к выполнению обещаний ,reject - обозначает отказ //

// let promisrtest = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         reject("end"); // В этом месте мы можем ставить на выбор две функции А, именно "resolve,reject"
//     }, 1500);
// });

// promisrtest
// .then(
//     result => {
//         console.log("Ok:" + resolve); // значение для вывода "Ok"
//     },
//     error => {
//         console.log("error:" + error); // значение для вывода "error"
//     }
// )

// //---------------------------

// // localstorage js - "локальнаe хранилище" "нужно нам для того чтобы понять был ли пользователь на сайте потому что сейчас ноги смотрят сайта без регистрации".

// var local ="";

// // мы их пишем для того если на случай появится какие-нибудь ошибки чтобы мы могли их обработать "try"
// try{
// // хранилище с помощью данной строке мы достаём значение заданной переменной                      
// local = localStorage.getItem("local2");
// }
// // мы их пишем для того если на случай появится какие-нибудь ошибки чтобы мы могли их обработать "catch"
// catch{
// local = '-1';
// }

// if(local == "1") {
//     alert("локальнoe хранилище равно" + local);
// }
// else{
//     // alert(" локальнoe сохранение отсутствует")
//     // localStorage.setItem("loocal2", "1");
// }

// //-----------------------------

// // Oбъявление массивы
// let arr1 = new Array(); // используется редко
// let arr = [];

// // значение массива
// let arrOne = [
//     'Ivan',
//     'Misha',
//     'ola', // висячие , 
// ];

// // получения значение 
// let arrOne2 = [
//     'Ivan', // 0 позиция 
//     'Misha', // 1 позиция
//     'Ola' // 2 позиция
// ];

// console.log(arrOne[1]);
// console.log(arrOne[5]); // undefined

// // ili 

// let arrOne1 = ['Ivan','Misha','Ola'];

// // получениe значения (длина массива. Свойства length )

// console.log(arrOne1);
// console.log(arrOne1.length); //  // это для того чтобы сразу получить значение 

// // различные типы значение 
// let arrTwo = [
//     "Kola",
//     {
//         type: "JS",
//         age: 26
//     },
//     true,
//     function () {
//         console.log('Priwet, ja Kola');
//     }
// ] ;

// // получениe значения

// console.log(arrTwo);
// console.log(arrTwo[0]);
// console.log(arrTwo[1].type );
// console.log(arrTwo[2]);
// arrTwo[3](); // тело функции 

// // многомерные массивы
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // получениe значения

// console.log(matrix);
// console.log(matrix[0][1]);

// доступ к массиву 

//Напоминаю что массив является объектом и следовательно, 
//ведёт себя как объект. Например копируется по ссылке :

// let arr2 = ['Petr','Reny','Ania'] // первый ключ 
// console.log(arr2); 

// let arrNew = arr2; // второй ключ 

// arrNew.length = 2;

// console.log(arr2);

//--изменение значений
//             0.      1.     2.       ключи или значение
// let arr = ['Andryj','Vacja','Inna'];

// //--меняя существующие

// arr[0] = 'Kola';
// console.log(arr);

// //--добавляя новаe 

// arr[3] = 'Sweta';
// console.log(arr); // обращаемся к несуществующему ключу 

//--------------------------

// разбирай Mетоды 

//Метод  "push" – добавляет элемент в конец  массива

// let arr = ['Ivan','Ola','Inna'];
// arr.push('Vadym')
// console.log(arr);

// arr.push('Dima','katja')
// console.log(arr);

//----------------------

// метод  "shift" – удаляет элемент в начале, так что второй элемент становится первым.

// let arr = ['Ivan','Ania','Aga'];
// arr.shift();    // просто убираем, поэтому скобки пустые .
// console.log(arr);

//-----------------

// метод "pop" - удаляет последний элемент 

// let arr = ['Ivan','Ania','Aga'];
// arr.pop();
// console.log(arr);

//------------------

// метод "unshift"– добавляет элементы в начало массива 

// let arr = ['Ivan','Inna','Aga'];
// arr.unshift('Vasia');
// console.log(arr);

// arr.unshift('Dima','Katia')
// console.log(arr);

//------------------

// удаление/ добавление/ изменения конкретных элементов

// let arr = ['Vania','Ania',"Aga",];

// delete arr[1];  // удаление // удаляет элемент оставляет за ним место .
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);

//------------------------

// метод  "splice"- позволяет добавлять, удалять и заменять элементы 
// синтаксис arr.splice(index[,deleteCount, elem1,....elemN])

// let arrOne = ['Vania','Ania','Aga',];
// // начиная с первой позиции 'Ania' удаляем один элемент
// arrOne.splice(1, 1); // удаляет полностью элемент и его место 
// console.log(arrOne);

// // удаляем элемент и возвращаем его в переменную 

// let arrTwo = ['Vania','Ania','Aga',];
// let removed = arrTwo.splice(1, 1);
// console.log(removed);

// // заменяем элементы 
// let arrThree = ['Vania','Ania','Aga',];
// // начиная с нулевой позиции 'Vania', за меня один элемент
// arrThree.splice(0, 1, 'Kolia');
// console.log(arrThree);

// // добавляем элементы 

// let arrFour = ['Vania','Ania','Aga',];
// // начиная с первой позиции перед "Ania" добавляю два элемента
// arrFour.splice(1, 0, 'Kolia','Masha');
// console.log(arrFour);

// // удаляем элемент 
// let arrFive = ['Vania','Ania','Aga',];
// // начиная с последней позиции "Aga" удаляем один элемент
// arrFive.splice(-1, 1);
// console.log(arrFive);

//----------------------------

// Mетод "slice" 
// создается новый массив, в котором копирует часть либо весь массив
// Cинтаксис arr.slice([start ], [end]) не включая [emd]

// копируем часть массива 
// let arrOne = ['Ivan','Ania','Aga',];

// // начиная с первой позиции 'Aga'
// // до второй позиции  'Aga' (не включая)

// let arrTwo = arrOne.slice(1, 2);
// console.log(arrTwo);

// // начиная с пред последний позиции 'Ania'
// //, да последний "Aga'" (не включая)

// let arrThree = arrOne.slice(-2, -1);
// console.log(arrThree);

// // копируй весь массив 
// let arrFour = arrOne.slice();
// console.log(arrFour);

//------------------------

// метод "concat"
// создает новый массив, в котором копирует данные из других массивов
// И дополнительные значения (в конец массива)
// синтаксис arr.concat(arg1, arg2 ....)

// let arrOne =['Ivan', 'Ania','Aga', ];
// let arrTwo = arrOne.concat('Petia');
// console.log(arrTwo);

//-----------------------

// поиск в массивах 
// методы - "indexOf"/ lastIndexOf i includes 
// аналоги строковым методом 

// let arr = ['Ivan','Ania','Aga',];

// console.log(arr.indexOf('Ania'));
// console.log(arr.indexOf('Petia'));
// console.log(arr.indexOf('Ania', 2));

// console.log(arr.includes('Ania'));
// console.log(arr.includes('Vasia'));
// console.log(arr.includes('Ania',2 ));


//find i findIndex 
// поиск в массиве объектов с предельным условия 


// let arr = [
//     {neme: 'Vasia',age: 26},               // item {....} - каждый элемент массива 
//     {name: 'Kolia', age: 18},             // index - Ключ, позиция . neme: age:
//     {neme: 'Ola', age: 'не скажу'},      // array - весь массив []
// ]

// let resultOne = arr.find(function(item, index, array) { // первый пример как можно записать 
//     return item.age === 18; 
// });

// //let resultOne = arr.find(item => item.age === 18 ); // второй пример как можно записать 
// console.log(resultOne);

// //findIndex 
// let resultTwo = arr.findIndex(item => item.age === 18 );
// console.log(resultTwo);

// поиск в массиве 
// filter 
// метод ищет все элементы, на которых функция – Колбэк вернёт True .

// let arr = [
//     {neme: 'Ivan', age: 17 },
//     {neme: 'Vasia', age: 36 },
//     {neme: 'Kolia', age: 18 },
//     {neme: 'Ola', age: 'не скажу'},
// ]
// let result = arr.filter(function(item, index, array) {
//     return item.age >= 18 ;
// });
// console.log(result);

//---------------------------

// сортировка массивов
// метод sort(fn)
// сортируют массив на месте, меняет в нём порядок элементов 

// сортировка слов 
// let arrOne = ['Ivan','Ania', 'Aga',];
// console.log(arrOne.sort());

// сортировка чисел 

// let arrTwo = [8, 27, 57,];
// console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки
// для строк применяется лексикографические порядок,
// ну и действительно выходит, что "8" > "27"
// console.log("8" > "27");

// сортирует массив на месте, меняя в нём порядок элементов 
// сортировка чисел 
// let arrTwo = [8, 22, 1,];
// console.log(arrTwo.sort());

// функция сортировки 
// function compareNumeric (a, b){
//     console.log(`сравниваем ${a} и ${b}`); // обратные `` a nie ''
//     if (a > b) return 1;
//     if (a === b) return 0;        // первый способ 
//     if (a < b) return -1;

// }

   // return (a - b )  -   // второй способ 

// console.log(arrTwo.sort((a, b) => a - b));     // третий способ 

// console.log(arrTwo.sort(compareNumeric));



// сортировка массивов 
// метод - "reverse"
// меняет  порядок элементов в массиве на обратный 

// let arrOne = ['Ivan', 'Ania', 'Aga',];
// console.log(arrOne.reverse());


//---------------------------

// преобразование массивов 
// метод - "map"
// вызывает массив результатов выполнения этой функции в

// let result = arr.map(function(item, index, array)
// возвращается новая значение вместо элемента 

// let arr = ['Ivan', 'Ania', 'Aga',];
// let result = arr.map(function(item, index, array) {
//     return item[0];
// });

// let result = arr.map (item => item[0]);
// console.log(arr);
// console.log(result);

// метод - "split" i "join"
// метод преобразовывает строку в массив по з
// заданному разделителю 
// синтаксис str.split(delim)

// let str = 'Vania, Aga, Ania ';

// let arr = str.split(',');          // указываем разделитель в данном случае это ',' !! 
// console.log(arr);

// можно ограничить количество объектов которые 
// попадут вы массив 

// let arrOne = str.split(',', 2);
// console.log(arrOne);


// метод - "join"

// let arr = ['Ivan', 'Ania', 'Aga',];
// let str = arr.join(',');                 // указываем разделитель в данном случае это ',' !! + этим способом мы можем указать любой разделитель пример: . , : ; 
// console.log(str);

// получения строки из массива 
// let arrTwo = ['Ivan', 'Ania', 'Aga',];
// console.log(String(arrTwo));            // специальная функция - "String" который дает тот же самый эффект как в примере выше - разделитель будет только пример: , 
           

//-----------------------

// проверка "Array.isArray()
// массивы не образуют отдельный тип данных.
// Они основаны на объектах 

// let obj = {};                 // объект 
// let arr = [];                 // массив 

// console.log(typeof obj);
// console.log(typeof arr);

// как же нам узнать где массив один нет ?
// if (Arrya.isArrya(arr)) {
//     console.log('это массив!');
// }else {
//     console.log('это не массив!');
// }


//-----------------------


// перебор элементов 
// let arr = ['Ivan','Ania','Aga',];
// console.log(arr.length);

// цикл FOR 
// for (let i = 0; i < arr.length; i ++) {
//     console.log(arr[i]);
// }


// цикл FOR ... of 
// можно использовать для вывода значений 
// let arr = ['Ivan', 'Ania','Aga',];

// for (let arrItem of arr ) {
//     console.log(arrItem);
// };


// метод переборa forEach 
// выполняют функцию для каждого элемента массива 
// arr.forEach(function(item, index, array) {
//   0,1,2    // делает что-то c item 
// });

// let arr = ['Ivan','Ania','Aga',];

// arr.forEach(function(item, index, array) {
//     console.log(`${item} находится на ${index} позиции в ${array}`);
// });

// стрелочные функция 
// arr.forEach((item, index, array) => {
//     console.log(`${item} находится на ${index} позиции в ${array}`);
// });


// let arr = ['Ivan', 'Ania','Aga',];
// arr.forEach(show);

// function show(item){
//     console.log(item);
// }


//--------------------------



// методы "reduce" - "reduceRight"

// let arrOne = [1, 2, 3, 4];
// let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array){
//     return item + previousValue;
// },0);

// console.log(reduceValueOne);


// let arrTwo = ['Ivan','Ania', 'Aga',];
//Если не указать начальное значение, то оно будет равно
// первому элементу массива (previousValue = ivan) 
// А работа метода начинается со второго элемента (item = Ania)

// let reduceValueTwo = arrTwo.reduce(function(previousValue, item, index, array) {
//     console.log(previousValue);
//     console.log(item);
//     return `${item}, ${previousValue}`;
// });
// console.log(` пользователи: ${reduceValueTwo}`);



// что такое "prototype" это определённый объект который работает с родительским элементом./ это некоторый объект с помощью которого мы расширяем свойства объектов или классов.
//И как он работает ? 
// чтобы вывести значение в Консоль нам нужно указать название переменной через точку 
// const person = {
//    name: 'Vadym',
//    age: 26,
//    greet: function(){
//       console.log('Greet');
//    }
// };

// const person1 = new Object({
//    name: 'Vadym',
//    age: 26,
//    greet: function(){
//       console.log('Greet');
//    }
// });
// // глобальный класс , его свойства , создания  полей, функция  
// Object.prototype.sayHello = function(){   //
//    console.log('Hello');
// }

// const lena = Object.create(person1)
// lena.name = 'Elena'

// let str = new String( 'I am string')

// ======================

// что такое контекст "This" ? // слова "this" она всегда указывает на контекст в котором онo была вызвана

// function hello(){
//    console.log('hello',this);
// }

// const One = {
//    neme: 'Ivan',
//    age: 23,
//    sayHello: hello, 
//    sayHelloWindow: hello.bind (window), //. y функции hello есть специальный метод который называется "bind()" скобочках передать любой контекст кто же буду привязан к этой функции 
//    logInfo: function(job){
//       console.group(`${this,name}info:`);
//       console.log(`Name is ${this.name}`);
//       console.log(`Age is ${this.name}`);
//       console.log(`Job is ${job}`);
//       console.groupEnd();

//    }
// }

// const lena = {
//    name: 'Elena',
//    age: 23 

// }
// const fnLenaInFold = One.logInfo.bind(lena) // bind принимает информацию в Консоль . + метод "bind" вызывает функцию когда нам нужно.
// fnLenaInFold('Fronttend', '8-928-345-21') // fnLenaInFold передает информацию в Консоль .
//  One.logInfo.call(lena, 'Fronttend', '8-928-345-21')  // A  метод "call" вызывает функцию сразу
//  One.logInfo.apply( lena, ['Fronttend', '8-928-345-21'])  // разница между вышенаписанным методом способа передачи информации в функцию 



 // ==============

//  const array = [1, 2, 3, 4, 5]
 
//  function multBy(arr, n) {
//    return arr.map(function(i) {
//       return i * n 
//  })
//  }
// console.log(multBy(array ,15 ));


// Array.prototype.multBy = function(n){
//    return this.map(function(i) {           // C помощью "this.map" А также мы можем работать в консоли списываем "multBy" И значение пример [5, 8, 12].multBy(6) можно расширять объекты ошибок, строк, promisy 
//           return i * n 
// })
// }
// console.log(array.multBy(6));       


//  Array.prototype.multBy = function(n) {
//    console.log('multBy', this);
//  }

// array.multBy(2)

//==========================

// что такое замыкание. Kак они работает ?

// function createCalcFunction(n){
//    return function() {
//       console.log(1000 * n);
//    }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//    return function(num) {
//       return n + num  
//    }
// }

// const addOne = createIncrementor(1)
// const addTen  = createIncrementor(10)

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

// function urlGenerator(domin){
//    return function (url) {
//       return `https// ${url}. ${domin}`
//    }
// }


// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')


// console.log(comUrl('google'));
// console.log(comUrl('NetFlix'));

// console.log(ruUrl('BBB'));
// console.log(ruUrl('AAA'));

// console.log(comUrl('AAA'));


//==================

// создание классов и работа с ними работa .

// const animal = {
//    name: 'Animal',
//    ade: 5,
//    hasTail: true 
// }
  
// class Animal {
//    static tyoe = 'ANIMAL'

//    constructor(options){
//       this.name = options.name
//       this.age = options.age
//       this.hasTail = options.hasTail
//    }
//    voice(){
//       console.log('I am Animal!');
//    }
// }

// const animal = new Animal({
//    name:'Aniamal',
//    age:5,
//    hasTail: true 
// })

// class Cat extends Animal {
//    static type = 'Cat'

//    constructor(options){
//       super(options)
//       this.color = options.color
//    }
   
//    voice(){
//       super.voice()
//       console.log('I am Cat');
//    }
      // Метод get используется для получения значения свойства объекта. 
      // Он определяет, что должно произойти при попытке доступа к свойству.
      // значение хранится в _age, а метод get используется для доступа к этому значению.
//    get ageInfo (){
//       return this.age *7 
//    }
      // Здесь метод set с именем age определяет, что при попытке установить значение 
      // свойства age объекта obj, оно будет сохраняться в 
//    set ageInfo(newAge){
//       this.age = newAge 
//    }
// }

// const cat = new Cat ({
//    name: 'Cat',
//    age: 7,
//    hasTail: true,
//    color: 'black',
// })

//========

// class Component {
//    constructor(selector){
//       this.$el = document.querySelector(selector)
//    }
//    // спрятать 
//    hide(){
//       this.$el.style.display = 'none'
//    }
//    // показать 
//    show(){
//       this.$el.style.display = 'block'
//    }
// }

// class Box extends Component {
//    constructor(optinas){
//       super(optinas.selector)

//       this.$el.style.width = this.$el.style.height = optinas.size + 'px'
//       this.$el.style.background = optinas.color
    
//    }
// }

// const box1 = new Box({
//    selector: '#box1',
//    size: 100,
//    color: 'red'
// })

// const box2 = new Box({
//    selector: '#box2',
//    size: 120,
//    color: 'blue'
// })

// class Circle extends Box {
//    constructor(optinas){
//       super(optinas)

//       this.$el.style.borderRadius = '50%'
//    }
// }
// const c = new Circle({
//    selector: '#circle',
//    size: 90,
//    color: 'green'
// })


//==================

// Kак работает "ASYNC" I "AWAIT" работа с сервером 

// const delay = ms => {
//    return new Promise(r => setTimeout(() => r(), ms))
// }

// delay(2000).then(() => console.log('2 sec'));

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos(){
//    console.log('Fetch to do started....');
//    // также можно сократить код .then(() => fetch(url)) 
//    // И по умолчанию если мы не пишем "RETURN" то JS автоматически возвращает результат.
//    return delay(2000)
//    .then(()=> {
//       return fetch(url)
//    })
//    .then(response => response.json())   
// }

// fetchTodos()
// .then(data => {
//    console.log('Data:', data);
// })
// .catch(e => console.error(e))

//====

// // функция которая является асинхронной "ASYNC" она всегда возвращает "PROMIS"
// async function fetchAsyncTodos(){
//    console.log('Fetch to do started...');
//    // "AWAIT" это будет равносильно тому что мы обрабатываем "PROMISY"
//    try {
//       await delay(2000)
//       const response = await fetch(url)
//       const data = await response.json()
//       console.log('Data', data);
//    }catch(e){
//       console.error(e);
//    }finally {

//    }


  
// }

// fetchAsyncTodos()


//=======================

// "PROXY" 
// что такое прокси? Посути это некоторые классы в JS
// который позволяет создавать различные ловушки для объектов, функции, классов и так далее .

// Objects
// const person = {
//    name: 'Ivan',
//    age: 25,
//    job: 'Fullstack',
// }

// const op = new Proxy(person,{
//    get(target,prop){
//       console.log(`getting prop ${prop}`);
//       if (!(prop in target)){
//          return prop 
//          .split('_')             // метод ".SPLIT" нам возвращают массив  (нижняe_ )
//          .map(p => target[p])   // метод ".MAP" можем пробежаться по массиву 
//          .join('')             // метод ".JOIN" соединяем все через пробел 
//       }
//       return target[prop]
//    },
//    set(target, prop, value){
//       if (prop in target){
//          target[prop] = value
//       }else {
//          throw new Error(`No ${prop} field in target`)
//       }
      
//    },
//    // Метод has определен как функция, которая принимает ключ в качестве параметра и проверяет,
//    // существует ли такой ключ в свойстве data объекта obj. Он использует оператор in для проверки наличия ключа.
//    has(target,prop){
//       return ['age', 'name', 'job']. includes(prop) // метод "INCLUDES" С помощью него можно спросить .
//    },
//    // позволяют нам удалять какое-то свойство из объектов мы также получаем некоторые "TARGET" также получаем "PROP"
//    deleteProperty(target, prop){
//       console.log('Deleting...', prop);
//       delete target[prop]

//    }
   
// })

// // Functions 
// const log = text => `Log: ${text}`

// const fp = new Proxy(log,{
//    apply(target, thisArg, args){       // метод "APPLY" принимает в себя параметры 
//    console.log('Colling fn...');      // "TARGET" это самая функция, "THISARG" это контекст до самого передавали "ARGS" это все параметры который мы передаем нашу функцию 
   
//    return target.apply(thisArg, args).toUpperCase()
// }

// })

// // Classes 

// class Person {
//    constructor(name, age){
//       this.name = name 
//       this.age = age 
//    } 
// }

// const PersonProxy = new Proxy(person, {
//    constructor(target, args) {
//       console.log('`Constructor...');

//       return new Proxy(new target(...args),{
//          get(t, prop){
//             console.log(`Getting prop "${prop}`);
//             return t [prop]
//          }
//       })
//    }
// })

// const p = new PersonProxy('Maxim',30)

//====================

//Object.create 

// const person = Object.create(                     //  Mетод "CREATE" принимает в себя два параметра и оба из них являются объектами.   
//    {
//       colculateAge() {
//          console.log('Age:', new Date().getFullYear);
//       }
//    },
//    {
//       name: {                        // настройки полей 
//          value: 'Ivan',               
//          enumerable: true,            // Перечислимость (enumerability)как перебор свойств объекта или сериализация объекта. Зависит ot (true, ili folse)
//          writable: true,              // writable определяет, может ли значение свойства быть изменено. (true, folse)
//          configurable: true           // configurable определяет, может ли свойство быть изменено или удалено и может ли его атрибуты быть изменены. (true, folse)
//       },
//       birthYear: {
//          value: 1993,
//          enumerable: false,
//          writable: false,
//          configurable: false
//       },
//       age: {
//          get(){
//             return new Date().getFullYear() - this.birthYear
//          },
//          set(){
//             document.body.style.background = 'red'
//             console.log('Set age',value);
//          }
//       }
//    }
//    )  
//    person.name = 'Maxim'                          
// for (let key in person){
//    console.log('key',key, person[key]);
// }

//==================
