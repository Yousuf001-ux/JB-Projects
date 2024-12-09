// 1

let lastName = "Tobi"
let firstName = "Awokunle"
let fullName = `${lastName}, ${firstName}`
console.log(fullName);

// 2

let baseNumber = 10
let newNumber = 100
let comparison = newNumber > baseNumber
console.log(comparison)

// 3

let firstNumber = 200
let secondNumber = 200
let result = firstNumber == secondNumber
console.log(result)

// 4

let firstSon = 100
let secondSon = 200
let thirdSon = 300
let fourthSon = 400
let fifthSon = 500
let totalSon = 5
let average = (firstSon+secondSon+thirdSon+fourthSon+fifthSon) / totalSon
console.log(average)


// // 5

// let numberInput = prompt("Put in your best number")
// numberInput = Number(numberInput)
// let numberResult = numberInput*2
// console.log(numberResult)

// 6

// let numberOne = prompt("Put in the first number")
// let numberTwo = prompt("Put in the second number")

// console.log(numberOne > numberTwo)

// 6

let numberOne = prompt("Put in the first number")
let numberTwo = prompt("Put in the second number")
if(numberOne > numberTwo){
    alert(`${numberOne} is greater than ${numberTwo}`)
}else{
    alert(`${numberTwo} is greater than ${numberOne}`)
}