// const familyNames = ['Олександр', 'Наталія', 'Макс', 'Іван'];
// console.log(familyNames);

// const arr = ['яблуко', 'банан', 'груша', 'персик'];
// console.log(arr[1]);

// const arrNumbers = [10, 20, 30, 40, 50];
// const sum = arrNumbers[0] + arrNumbers[arrNumbers.length - 1];
// console.log(sum);


//////////////////////////////////////////////////////////////////////

// function generateRandomArray(minLength, maxLength) {
//    const length = Math.floor(Math.random() * 10) + 1;
 
//    const array = [];
//    for (let i = 0; i < length; i++) {
//      array.push(Math.floor(Math.random() * 100));
//    }

//    return array;
//  }
  

/////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////

// const mur = `${greeting}, ${name}!`

// console.log(mur)

// const a = 5
// const b = 10
// const sum = `Сумма a и b равна ${a + b}`
// const sum = "Сумма a и b равна" + (a + b)

// console.log(sum)

////////////////////////////////////////////////////

// const posX = 50
// const posY = -100
// const posZ = 1.55

// const point = (posX + posY + posZ)

// console.log(point)

// console.log('Слово' / 100)

// console.log(100 / 0)

// console.log(9900000000000000091n + 1n) --- bigint

// console.log(9900000000000000091 + 1) 

//////////////////////////////////////////////////////////////////////

// console.log(
//    typeof true
// )

///////////////////////////////////////////////////////////////////////


// const randomArray = generateRandomArray(5, 15);
// console.log(randomArray);

// function getLength(x1, y1, x2, y2) {
//    return Math.sqrt(
//        (x2-x1) ** 2 + Math.pow(y2-y1, 2)
//    )
// }

// (x1, y1) (x2, y2)
// len = sqrt((x2-x1)^2 + (y2 - y1)^2)

// const plan = document.getElementById("plan")

// function randInt(min, max) {
// return Math.floor(
//   Math.random() * (max - min + 1) + min
//  )
// }

// var X = randomInteger(0, planWidth );
// var y = randomInteger(0, planWidth );

// console.log( x );
// console.log( y );


// let attemps = 0
// let width = plan.width
// let height = plan.height
// const bomb = 10
// const bombX = randInt(0, width)
// const bombY = randInt(0, height) 

// plan.addEventListener("click", (event) => {
//  attemps++
//  console.log("Ліва кнопка миші була натиснута...")
//  console.log(`Координати: x-${event.clientx} y-${event.clienty}`)

// let distance = getLength(bombX, bombY, event.clientX, event.clientY)
// console.log(distance)

// if (distance <= 10) {
//    console.log("Ви знайшли бомбу і врятували всіх:)")
// } else if (attemps >= 3) {
//  plan.src = "boom.jpg"
//  console.log("boom")
// }
// })

////////////////////////////////////////////////////////////
                                                          //
// Math.floor(Math.random() * (100 - 10) + 10)           //
// Math.floor(Math.random() * 100 + 10)                 // 
// Math.random() + 5                                   //
                                                      //
///////////////////////////////////////////////////////

