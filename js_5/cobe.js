// const group = [
//     ["Timofii", "Samostrol"],
//     ["Misha", "Khan"]
//     ["Maksim", "Vasilev"]
// ]

// const a = {
//     name: "Timofii",
//     lastName: "Samostrol",
// }

// console.log(group[0]);
// console.log(a.name)
// a["name"] === a.name

// for (const key in a) {
//      console.log(key, a.key)
// }

//////////////////////////////////////////////////

// const maks = {
//     name:"Maks",
//     lastName:"Vasilev",
//     thirdName:"Anatolyevich",
//     age:"15",
//     gender:"Male",
// }

// console.log(maks.name)

//////////////////////////////////////////////////

// user.Login = '?'; ник
// user.pass = '?'; пар
//delete. user.? удаляет

//////////////////////////////////////////////////

// user.log = function() {
//     console.log(user.?)
//      console.log(user.?)
//       console.log(user.?)
// } 

//////////////////////////////////////////////////

// Math.round(math.random()*?)

// console.log(
  //math.floor() к мен. окру.
// )

// console.log(
  //math.sqrt() корень кв.
// )

// console.log(
  // new Date() - время
// )

// true && true - Оба должны бить правы

// true || false зад. прав

///////////////////////////////////////////////////

// const pk = {
//   memory: "1000GB SSD",
//   processor: "Intel Core i7",
//   videoCard: "NVIDIA GeForce RTX 2050",
//   ram: "16GB"
// };

// function addProperty(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

///////////////////////////////////////////////////////

// let seconds = 0;
// let interval;

// function startTime() {
//   interval = setInterval(() => {
//     if (seconds === 0) {
//       document.getElementById("timers").style.color = "red";
//     }
//     seconds++;
//     document.getElementById("s").innerText = seconds;
//   }, 1000);
// }

// function pauseTime() {
//   clearInterval(interval);
// }

// function resetTime() {
//   pauseTime();
//   seconds = 0;
//   document.getElementById("s").innerText = seconds;
// }

// function converter(num) {
//   if (num < 10) {
//     return `0${num}`;
//   }
//   return `${num}`;
// }

// function startCountdownTimer(inputTime) {
//   const [hours, minutes, secondsInput] = inputTime.split(":").map(Number);
//   let totalSeconds = hours * 3600 + minutes * 60 + secondsInput;

//   const timerElement = document.createElement("div");
//   timerElement.id = "timer";
//   timerElement.style.fontSize = "24px";
//   timerElement.style.fontWeight = "bold";
//   document.body.appendChild(timerElement);

//   function updateCountdownDisplay() {
//     const h = Math.floor(totalSeconds / 3600);
//     const m = Math.floor((totalSeconds % 3600) / 60);
//     const s = totalSeconds % 60;
//     timerElement.innerText = `${converter(h)}:${converter(m)}:${converter(s)}`;
//   }

//   const countdownInterval = setInterval(() => {
//     if (totalSeconds > 0) {
//       totalSeconds--;
//       updateCountdownDisplay();
//     } else {
//       clearInterval(countdownInterval);
//       timerElement.style.color = "red";
//     }
//   }, 1000);

//   updateCountdownDisplay();
// }

// const timeInput = prompt("Enter countdown time (HH:MM:SS):");
// if (timeInput) {
//   startCountdownTimer(timeInput);
// }


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
                                                            //
// const button = document.createElement('button');            //
// button.textContent = 'Click Me';                            //
// button.style.margin = '10px';                               //
// document.body.appendChild(button);                          //
//                                                             //
// button.addEventListener('click', () => {                    //
//     button.textContent = 'Text Changed';                    //
// });                                                         //
//                                                             //
// const redSquare = document.createElement('div');            //
// redSquare.style.width = '100px';                            //
// redSquare.style.height = '100px';                           //
// redSquare.style.backgroundColor = 'red';                    //
// redSquare.style.margin = '10px';                            //
// redSquare.style.transition = 'all 0.40s';                    //
// document.body.appendChild(redSquare);                       //
//                                                             //
// redSquare.addEventListener('mouseenter', () => {            //
//     redSquare.style.width = '150px';                        //
//     redSquare.style.height = '150px';                       //
// });                                                         //
//                                                             //
// redSquare.addEventListener('mouseleave', () => {            //
//     redSquare.style.width = '100px';                        //
//     redSquare.style.height = '100px';                       //
// });                                                         //
//                                                             //
// document.body.addEventListener('mousemove', (event) => {    //
//     if (event.movementY < 0) {                              //
//         document.body.style.backgroundColor = 'yellow';     //
//     } else if (event.movementY > 0) {                       //
//         document.body.style.backgroundColor = 'green';      //
//     }                                                       //
// });                                                         //
                                                            //
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// for (let i = 0; i < structuredClone.length; i++) {console.log(str[i])}

