// //Example:
// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     get name(){
//         return this._name;
//     },
//     get drink(){
//         this._thirst -= 10;
//         return this._thirst;
//     }

// }

// console.log(rosie.name);
// console.log(rosie.drink);

////Example:
// let storing = "Greeting";
// let number = 3011;
// let boolean = "True";
// let newArray = [
//     "item 1",
//     "item 2",
//     "item 3",
//     "item 4"
// ];
// console.log(newArray);

// newArray.push("item 5");
// console.log(newArray);

// for (let i = 0; i < newArray.length; i++) {
//         console.log(newArray[i]);
//     }


// let balance = 100;
// let amount = 10;
// const cashWithdrawal = (amount) => {
//      if (balance >= amount){
//          balance -= amount;
//          console.log(`Withdrawing ${amount} the remaining balance is ${balance}`);    
//     }
//     else {
//         console.log("You have no enough balance!");
//     }}

// cashWithdrawal(amount);

// //activity: car parking company.
// class Car{
//     constructor(regNum){
//     this._regNum = regNum;
//     this._numHrs = 0;
//     this._chargeAmount = 0.00;
//     }
//     get regNum(){
//         return this._regNum;
//     }
//     get numHrs(){
//         return this._numHrs;
//     }
//     get chargeAmount(){
//         return this._chargeAmount;
//     }
//     increaseHours(){
//         this._numHrs++;
//         this._chargeAmount+=1.50;
//     }
//    }
//     const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for (i = 0; i < hr; i++){
//         car.increaseHours(); 
//     }
//     return `You need to pay £${car._chargeAmount} for ${car.numHrs} hours.`; 
//    }
//    console.log(pay("M7 CAR", 5));

// //Example
// class Enemy{
//     constructor(name, health){
//         this._name = name;
//         this._health = health;
//         this._weapons = ["sword", "bow"];
//     }
//     get name(){
//         return this._name;
//     }
//     get health(){
//         return this._health;
//     }
//     get weapons(){
//         return this._weapons;
//     }
//     reduceHealth(amount){
//         return this._health -= amount;
//     }
// }
// const enemy1 = new Enemy("Osama", 1000);
// console.log(enemy1.health);
// console.log(enemy1.reduceHealth(100));

// //activity 1: car park/ subclass
class Cars {
    constructor(arrival, departure, hourlyCost) {
        this._arrival = arrival;
        this._departure = departure;
        this._hourlyCost = hourlyCost;
    }
    
    calculateCost() {
        return (this._departure - this._arrival) * this._hourlyCost;
    }

    makePayment() {  
        if (this._balance >= this.calculateCost()){
            this._balance = this._balance - this.calculateCost();
            return `You have paid £${this.calculateCost()}, your remaining balance is £${this._balance}`;
        }
        else {
            return `You have no sufficient balance.`;
        }
    }  
}

class Staff extends Cars{
    constructor(reg, staffId, balance){
        super(arrival, departure, hourlyCost);
        this._reg = reg;
        this._staffId = staffId;
        this._balance = balance;
        
    }
}

const N001 = new Cars(3, 8, 1.50);
const N002 = new Staff("AA11A1", "SD001", 80);
console.log(N001);

// // Activity (2): Cyber Pet
// class Pet{
//     constructor(dog, cat, rabbit){
//         this._dog = dog;
//         this._cat = cat;
//         this._rabbit = rabbit;
//         this._play = false;
//         this._eat = false;
//         this._drink = false;
//     }

//     petPlay() {
//         this._play = true;
//     }

//     petEat() {
//         this._eat = true;
//     }

//     petDrink() {
//         this._drink = true;
//     }
// }

////Activity (3): DOM! Convert the Cyber Pet to a DOM project.

