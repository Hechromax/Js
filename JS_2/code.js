//let arr = ["Андркй Николенко, Максим Васильев, Misha, Міхайло Атаманенко, Кіра  "]
//console.log(arr[4])

// Ctrl + /

//let arr = [5, 15, 25, 35, 45]
//console.log(arr[0] * arr[2])

// function generateRandomArray() { 
//     const length = Math.floor(Math.random() * 15) + 1; 
//     const array = [];
//     for (let i = 0; i < length; i++) { 
//        array.push(Math.floor(Math.random() * 50) + 1); 
//     }
//     return array;
//  }
 

// let arr = generateRandomArray()
//  console.log(arr)

// const arr = [2, 4, 6, 8, 10]
// let sum = 0;
// for (let i = 0; i < arr.length; i ++) {
//     sum += arr [i]
//     console.log(arr[i])
// }

// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for (let i=0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum/arr.length)


// function getLength(arr, an) {
//     if (arr.length = n) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(getLength([1, 2, 3], ))

// let arr = [5, 3, 8, 2, 7, 4, 10]
// let max = arr[0]; 
// for (let i=0; i < arr.length; i++) {
//     if(arr[i] > max) {
//     max = arr[i]
//     }
// }

// console.log(max)


// console.log( arr[arr.length - 1] )
//              ↥
//      последний символ 

////////////////////////////////////////////
 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for (let i=0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum/arr.length)

//////////////////////////////////////////////////

// function generateRandomArray() { 
    //     const length = Math.floor(Math.random() * 15) + 1; 
    //     const array = [];
    //     for (let i = 0; i < length; i++) { 
    //        array.push(Math.floor(Math.random() * 50) + 1); 
    //     }
    //     return array;
    //  }
    
    //  function calculateAverage(array) {
    //     if (array.length === 0) return 0; 
    //     for (let num of array) {
    //        sum += num;
    //     }
    //     return sum / array.length;
    //  }

//////////////////////////////////////////////////

    // a.pop() c конца -
    // a.push() c конца +
    // a.shift() с начала -
    // a.unshift() с начала +

////////////////////////////////////////////////////////

// a.join("") делает ряд

// a.split("") разделяет словj yf на буквы 

// a.in

// a.reverse() зеркало разво. масив

// a.slice() вырезает 

// a.sort() сортирует как ряд 

///////////////////////////////////////////////////////

// const totalArr = arr1.concat(arr2, arr3)
// concat - объединяет масиви

///////////////////////////////////////////////////////////

// user.Login = '?'; ник
// user.pass = '?'; пар

//////////////////////////////////////////////////////////

// function jnClick() {
//     console.log("Hello")
// }

// const hello = document.getElementsByName("h1")
// console.log(hello.item(0))

/////////////////////////////////////////////////////////

// const changeTextButton = document.getElementById("changeTextButton");
// changeTextButton.onclick = function () {
//     const title = document.getElementById("title");
//     title.innerText = "Текст заголовка изменен!";
// };


// const changeColorButton = document.getElementById("changeColorButton");
// changeColorButton.onclick = function () {
//     const items = document.getElementsByClassName("item");
//     for (let item of items) {
//         item.style.color = "red";
//     }
// };

/////////////////////////////////////////////////////////////////

// const h1 = document.getElementById("h1")[0]

// const students = document.getElementsByTagName("h1")

// const misha = document.getElementById("misha")

// kira.className += "adsent"


// kira.onclick = function() {
//     kira.style.color = "green"
//     kira.innerText += "Filonova"
//     kira.onclick = undefined
// }

/////////////////////////////////////////////////////////////////////
//                                                                 //
// if...else: используется для проверки условий.                   //
// switch: проверяет значение на соответствие множеству вариантов. //
//                                                                 //
// // /// /// // // // // // // /// // // // // // // // // // // ///
//                                                                 //
// let score = 90;                                                 //
//                                                                 //
// if (score > 80) {                                               //
//   console.log("Отлично");                                       //
// } else {                                                        //
//   console.log("Попробуйте еще раз");                            //
// }                                                               //
//                                                                 //
// switch (score) {                                                //
//   case 90:                                                      //
//     console.log("Вы получили A");                               //
//     break;                                                      //
//   default:                                                      //
//     console.log("Оценка неизвестна");                           //
// }                                                               //
//                                                                 //
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// document.addEventListener('click', (event) => {
//     console.log(`Mouse clicked at: X=${event.clientX}, Y=${event.clientY}`);
// });

// const square = document.createElement('div');
// square.style.width = '50px';
// square.style.height = '50px';
// square.style.backgroundColor = 'blue';
// square.style.position = 'absolute';
// square.style.margin = '0';
// square.style.left = '50px';
// square.style.top = '50px';
// document.body.appendChild(square);

// let squarePosition = { left: 50, top: 50 };

// document.addEventListener('keydown', (event) => {
//     const step = 10;
//     if (event.key === 'ArrowUp') {
//         squarePosition.top -= step;
//     } else if (event.key === 'ArrowDown') {
//         squarePosition.top += step;
//     } else if (event.key === 'ArrowLeft') {
//         squarePosition.left -= step;
//     } else if (event.key === 'ArrowRight') {
//         squarePosition.left += step;
//     }
//     square.style.left = `${squarePosition.left}px`;
//     square.style.top = `${squarePosition.top}px`;
// });

// const circle = document.createElement('div');
// circle.style.width = '30px';
// circle.style.height = '30px';
// circle.style.backgroundColor = 'red';
// circle.style.borderRadius = '50%';
// circle.style.position = 'absolute';
// document.body.appendChild(circle);

// document.addEventListener('mousemove', (event) => {
//     circle.style.left = `${event.clientX}px`;
//     circle.style.top = `${event.clientY}px`;
// });

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// //
///////////////////////////////// ///
//////////////////////////////// ////
/////////////////////////////// /////
////////////////////////////// //////
///////////////////////////// ///////
//////////////////////////// ////////
/////////////////////////// /////////
////////////////////////// //////////
///////////////////////// ///////////
//////////////////////// ////////////
/////////////////////// /////////////
////////////////////// //////////////
///////////////////// ///////////////
//////////////////// ////////////////
/////////////////// /////////////////
////////////////// //////////////////
///////////////// ///////////////////
//////////////// ////////////////////
/////////////// /////////////////////
////////////// //////////////////////
///////////// ///////////////////////
//////////// ////////////////////////
/////////// /////////////////////////
////////// //////////////////////////
///////// ///////////////////////////
//////// ////////////////////////////
/////// /////////////////////////////
////// //////////////////////////////
///// ///////////////////////////////
//// ////////////////////////////////
/// /////////////////////////////////
// //////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////

// let i = 1;
// let sum = 0;

// while (i <= 10) {
//   sum += i;
//   i++;
//   console.log(sum)
// }

// console.log('Сумма чисел от 1 до 10:', sum);

// ////////////////////////////////////////////////////////////

// let number;

// do {
//   number = parseInt(prompt('Введите число больше 10:'), 10);
// } while (number <= 10);

// console.log('Вы ввели:', number);

// let attempts = 0;
// do {
//   attempts++ ;
// } while (number <= 10);
// console.log('Попыток было:', attempts);

// let i = 1;
// while (i <= 3) {
//     console.log(i);
//     i++;
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 2);

// for (let i = 0; i < 5; i++) {
//   console.log("Привет!");
// // }

///////////////////////////////////////////////////////////////////////////////////         
//                                                                               //
// ▄▄                                                                            //
// ▀████▄     ▄███▀                   ██                                         //
//   ████    ████                                                                //
//   █ ██   ▄█ ██  ▄█▀██▄ ▀██▀   ▀██▀███ ▀████████▄█████▄ ▀███  ▀███  ▄██▀███    //
//   █  █▓  █▀ ██ ██   ██   ▀██ ▄█▀   ██   ██    ██    ██   ██    ██  ██   ▀▀    //
//   ▓  █▓▄█▀  ██  ▄███▓█     ███     ▓█   ▓█    ██    ██   ▓█    ██  ▀█████▄    //
//   ▓  ▀▓█▀   ██ █▓   ▓█     ▓▓██    ▓█   ▓█    ▓█    ██   ▓█    █▓       ██    // 
//   ▓  ▓▓▓▓▀  ▓▓  ▓▓▓▓▒▓     ▓▓█     ▓▓   ▓▓    ▓▓    ▓▓   ▓█    ▓▓  ▀▓   █▓    //
//   ▒  ▀▓▓▀   ▓▓ ▓▓   ▒▓   ▓▓▀ ▓▓▓   ▓▓   ▒▓    ▒▓    ▓▓   ▓▓    ▓▓  ▓▓   ▓▓    // 
// ▒ ▒▒▒ ▒   ▒ ▒▒▒▒▓▒ ▒ ▓▒ ▒▒    ▒▓▒▒ ▒ ▒▒ ▒▓▒  ▒▒▒   ▒▒▓▒  ▒▒ ▓▒ ▒▓▒ ▒ ▒▓▒      //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////

//////////////////////
                    //
// *{               //
                    //
// }                //
// Ко всему проекту //
                    //
//////////////////////

// let arr = [];

// arr.push("fddf","gdg","dsfsd");

// let sum = arr.length - 1;

// console.log(sum)



// let arr = ["fddf","gdg","dsfsd"];

// arr.shift()

// console.log(arr.length)



// let arr = ["Maks","Ola","Vasa"];

// arr.length

// arr.shift()

// console.log(arr)

// let sum  = [["Ok"],["No"]]

// console.log(sum[1]);

// let arr = Array.from("Nechro");

// console.log(arr)

// let rra = Array.from("max")

// console.log(rra)

// arr.concat(rra)

// let arr = [1, 2, 3, 4]

// arr.push(5)

// console.log(arr)

// let arr = ["popa", "pop", "lox"];

// arr.pop("2")

// console.log(arr)

// let arr = ["aaa","bbb","ccc"];

// arr.push("ppp","eee")

// console.log(arr)

// let tower = []

// for (let i = tower.length; i <= 4; i++){
//     tower.push(i)
//     console.log("Добавить:")
// }

// for (let i = tower.length; i > 1; i--) {
//     console.log("Удаляю:", tower.pop())
// }


// let arr = [];

// console.log("как так?", arr.push(5,4,3))

// let sum = []

// sum.push(1,2)

// console.log(sum.length)


// let arr = [["sdf"],[]]

// console.log(

// )

// let arr = ["5", "10", "15", "20" ];

// arr.pop();

// arr.push(25, 30)

// console.log(arr)

// let som = ["ss","dd","ff","gg","tt"];

// som.shift();

// som.unshift(22,66)

// console.log(som)


