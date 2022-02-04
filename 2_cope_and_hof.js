////Scope_and_high order functions

// //Function scope:
// let stringLet = "let string";
// var stringVar = "var string";
// const newString = () => {
//     let stringLet = "new let string";
//     var stringVar = "new var string";
//     console.log(`Inside function: ${stringLet}`); //new
//     console.log(`Inside function: ${stringVar}`); //new
// }
// newString();
// console.log(`Outside function: ${stringLet}`); //old
// console.log(`Outside function: ${stringVar}`); //old

// //Block Scope (let vs var)
// function startLet(){
//     for (let i = 0; i < 5; i++){
//         console.log(i); //Output: 0,1,2,3,4
//     }
//     console.log(i); //ReferenceError: i is not defined
// }
// function startVar(){
//     for (var i = 0; i < 5; i++){
//         console.log(i); //Output: 0,1,2,3,4
//     }
//     console.log(i); //Output: 5 cause of using var
// }
// console.log("Running with let:");
// startLet();
// console.log("Running with var:");
// startVar();

// //Higher Order Function - Ex 1
// //Higher Order Function is when you call a function and you pass another function as a parameter
// const whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`);
// }
// const greet = (time, fn) => {
//     if(time < 1200){
//         fn("Morning");
//     }else if (time >= 1200 && time < 1800){
//         fn("Afternoon");
//     }else{
//         fn("Evening");
//     }
// }
// greet(1400, whichGreeting);


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

////Activity (2)
////The array method .map



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
