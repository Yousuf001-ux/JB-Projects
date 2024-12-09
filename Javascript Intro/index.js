// Testing different ways of declaring variables and different types of data

let fullName = "Yusuf Oluwatobi Awokunle"
const age = 23
var isDull = false

console.log("My name is",fullName,".I'm,",age,"years old. It is",isDull,"that I'm dull")
console.log(fullName)
console.log(age)
console.log(isDull)

// Arithmethic operations

let additionResult = 1+1
let substractionResult = 2-2
let multiplicationResult = 2*2
let divisionResult = 120/40
let modulusResult = 100%30
let rtpResult = 10**4

console.log(additionResult)
console.log(substractionResult)
console.log(multiplicationResult)
console.log(divisionResult)
console.log(modulusResult)
console.log(rtpResult)

// More Arithmetic operations

let firstPrice = 400
let secondPrice = 250
let thirdPrice = 150
let totalPrice = firstPrice + secondPrice + thirdPrice

console.log(totalPrice)

// Variable reassignment

let firstName
firstName = `Tobi Awokunle`
console.log(firstName)
console.log(typeof (firstName))

// Increment operator

let iPrice = 23
iPrice ++
console.log(iPrice)


// Decrement operator

let dPrice = 23
dPrice --
console.log(dPrice)

// Addition assignment operator

let balance = 200
balance += 500
console.log(balance)

// Subtraction assignment operator

let dBalance = 1200
dBalance -= 200
console.log(dBalance)

// Type coversion(when you covert one type of data to another type)

let num = "12"
num = Number(num)
console.log(typeof (num))

let studName = 12
studName = String(studName)
console.log(typeof (studName))

// Use case type conversion

// // let promptAge = prompt("Enter your age")
// console.log(promptAge)
// promptAge = Number(promptAge)


// Comparison operations
// let youthAge = prompt("How old are you? Answer truthfully")
// youthAge = Number(youthAge)
// let pass = youthAge >= 18
// console.log(pass);

// if else statements