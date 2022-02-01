// //Activity (1)
// //Write a simple function which logs “Hello Code Nation” to the console.
// const codeNation = () => {
//     console.log(`Hello Code Nation`);
// }
// const howMany = () => {
//     for (let i=0; i<5; i++){
//         codeNation();
//     }  
// }
// howMany();

// //Activity (3)
// const add = (a,b) => {
//     return a+b;
// }
// const subtract = (a,b) => {
//     return a - b;
// }
// const multiply = (a,b) => {
//     return a*b;
// }
// const divide = (a,b) => {
//     return a/b;
// }
// const doMaths = (num1) => {
//     return (num2, fn) => {
//         return fn(num1, num2);
//     }
// }
// console.log(doMaths(2)(1));

//Pseudo Code
let d = 10;
let m = 7;
let y = 1982;

if (m < 3) {
    m = m + 12;
    y = y - 1;
};

let f = Math.floor(y/100);

let l = y - (100 * f);

let s = Math.floor((2.6 * m) - 5.39) + Math.floor(l / 4) + Math.floor(f / 4) + d + l - (2 * f);

let x = s - (7 * Math.floor(s / 7));

let dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(dayOfWeek[(x-1)]);
