// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length counts the characters including the spaces of cohort, which equals "LEARN 2023". Counting the length of the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the number 4 is found inside of the [] so the console.log is showing the 4th character in the string of greeting which is o of the variable greeting that equals "Hello World"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: index inside of the [] is letting us know index is equal to 1. Our 1 index is Ruby because indexing start with 0 in our languages array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: I was wrong. After running some tests it looks like .toUpperCase only works with the individual strings and not the whole array. I placed 0 inside of [] was able to get SATURDAY in all caps.
//console.log(weekendDays[0].toUpperCase())
  //output=SATURDAY
// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 6
// b) Verify and explain: I was completely wrong. The answer is number. After doing research and bouncing off ideas with Raquel. We came to the conclusion to why we are getting number. The answer is number because typeof is an operator and is classifying the data type of .length. which would be a number. 