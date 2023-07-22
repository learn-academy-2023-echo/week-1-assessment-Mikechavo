// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// numbers determine if the number is below, at or above boiling point
// need to define boiling point set to 212
// will need to use string interpolation to display the number along with boiling status

const boilingPoint = 212
const boilingPointTemp = (temperature) => {
  if (temperature < boilingPoint) {
    return `${temperature} is below boiling point`
  } else if (temperature === boilingPoint) {
    return `${temperature} is at boiling point`
  } else {
    return `${temperature} is above boiling point`
  }
}
const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPointTemp(temperature1))
console.log(boilingPointTemp(temperature2))
console.log(boilingPointTemp(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// combine 2 arrays......concat? also well need to return the combined length
// varible combining arrays and then another varible strictly for combining the arrays
// return the the combined arrays 
// create another varible that I can console.log the the combined arrays

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

const combineArray = (arr1, arr2) => {
  const combineRuns = arr1.concat(arr2)
    return combineRuns.length
}

const totalLength = combineArray(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)
console.log(totalLength)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// create a variable to reverse the string 
// split the string in to an array 
// reverse the array of the letter and numbers
// join the reveresed outcome 
const currentCohort = "Echo 2023"
// creating const for reverse str
const reString = (str) => {
  //splitting the array
  const strArray = str.split("")
  //reversing the array
  const reArray = strArray.reverse()
  // joining the array
  const reString = reArray.join("")
  return reString
}
const reCohort = reString(currentCohort)

console.log(reCohort)
// Expected output: "3202 ohcE"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// return the last index value from an array
// need to output the the giveValues index space with the given number
// index starts with zero

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const lastIndexValue = (arr, value) => {
  return arr.lastIndexOf(value)
}
// lastIndexOf returns the index of the last number
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndex1 = lastIndexValue(numberOfConnections, givenValue1)
const lastIndex2 = lastIndexValue(numberOfConnections, givenValue2)

console.log(lastIndex1)
console.log(lastIndex2)
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// sort all numbers in an array from largest to smallest
// need to make a comparision that will add logic to the function
// make new varibles that uses the function to the sort the numbers from largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const sortNum = (arr) => {
  return arr.sort((a, b) => b - a) 
}
// I had to look up this .sort formula, don't think we covered that in the lecture but I hope thats right.
const sortedSummer = sortNum(sanDiegoSummerTemperatures)
const sortedWinter = sortNum(sanDiegoWinterTemperatures)

console.log(sortedSummer)
console.log(sortedWinter)