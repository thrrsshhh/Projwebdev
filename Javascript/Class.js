// // // JS is the programming language which is used to provide the instructions to the computer.
// // // to make the websites interactive

// // console.log("Hi Team Good Morning");
// // // Variables Rules For Declaration
// // // variables are case sensitive; a and A is different.
// // // variables should not contain any white spaces.
// // // variables should only contain the letters ,digits, and underscore.
// // // special symbols are not allowed (ex: @, #, &, $, !)
// // // variables should not start with a number.
// // // variables can start with letter or underscore.
// // // keywords can not be used as variables

// // a = 10
// // firstname = "shreya"
// // last_name2 = "Internship"
// // $name = "Internship"
// // _name = "shreya"


// // // write 5 valid and 5 invalid explore how special are not allowed

// // // let ----> Block Scoped/local Variable, variables cannot be reassigned/redeclared but can be updated.

// // // let x = 20;
// // // let x = 10;

// // // const ----> Block Scoped/local Variable, variables cannot be reassigned/redeclared or updated

// // const y = 10;
// // const x = 20;

// // // var ----> Global Scoped/Global variable. can be reassigned and it can be updated.
// // var x = 10;
// // var x = 20;

// // // Datatypes in js
// // // 1. Number
// // // 2. String
// // // 3. Boolean
// // // 4. Null
// // // 5. Undefined
// // // Datatypes in js
// // // 1. Number
// // // 2. String
// // // 3. Boolean
// // // 4. Null
// // // 5. Undefined

// // var x = 10;
// // var y = "shreya";
// // var z = true;
// // var a = null;
// // var b = undefined;

// // // Operators in js
// // JavaScript operators are symbols that perform operations on operands (variables and values).
// // 1. Arithmetic Operators
// // Used to perform arithmetic calculations.

// var a = 10;
// var b = 5;

// console.log(a + b); // 15 (Addition)
// console.log(a - b); // 5  (Subtraction)
// console.log(a * b); // 50 (Multiplication)
// console.log(a / b); // 2  (Division)
// console.log(a % b); // 0  (Modulus - Remainder)

// // 2. Assignment Operators
// // Used to assign values to variables.

// var x = 10;     // Assign 10 to x
// x += 5;         // x = x + 5 → 15
// x -= 2;         // x = x - 2 → 13
// x *= 2;         // x = x * 2 → 26
// x /= 2;         // x = x / 2 → 13

// // 3. Comparison Operators
// // Used to compare two values.

// var x = 10;
// var y = 5;

// console.log(x == y);   // false (Equal to)
// console.log(x != y);   // true  (Not equal to)
// console.log(x > y);    // true  (Greater than)
// console.log(x < y);    // false (Less than)
// console.log(x >= 10);  // true  (Greater than or equal to)
// console.log(x === 10); // true  (Strict equal: checks type + value)

// // 4. Logical Operators
// // Used to combine multiple conditions.

// var a = true;
// var b = false;

// console.log(a && b);  // false (AND)
// console.log(a || b);  // true  (OR)
// console.log(!a);      // false (NOT)

// // 5. Increment and Decrement Operators
// // Used to increase or decrease the value by one.

// var count = 5;

// count++;   // count becomes 6
// count--;   // count becomes 5 again


// // // Conditional Statements
// // Conditional statements help us make decisions in our code. They execute different blocks
// //  of code based on different conditions.

// // 1. `if` Statement
// //  Used when you want to run a block of code only if a condition is true.
// var temperature = 35;

// if (temperature > 30) {
//   console.log("It's a hot day.");
// }
// // Output:It's a hot day.


// // 2. `if...else` Statement
// // > Used when you want to run one block if the condition is true, and another block if it’s false.

// var isRaining = false;

// if (isRaining) {
//   console.log("Take an umbrella.");
// } else {
//   console.log("Enjoy the sunshine!");
// }
// // Output:Enjoy the sunshine!

// // 3. nested if:
// // > A nested if is used when you want to check a second condition, but only if the first condition is true. 
// // It allows you to add more control and precision to your decision-making.

// var age = 25;
// var isCitizen = true;

// if (age >= 18) {
//   if (isCitizen) {
//     console.log("You are eligible to vote.");
//   } else {
//     console.log("Only citizens can vote.");
//   }
// } else {
//   console.log("You are too young to vote.");
// }
// // Output:You are eligible to vote.

// // 4.switch:
// // > Used to select one of many blocks of code to be executed.
// var fruit = "Mango";
// switch(fruit) {
//   case "Apple":
//     console.log("Apples are red or green.");
//     break;
//   case "Banana":
//     console.log("Bananas are yellow.");
//     break;
//   case "Mango":
//     console.log("Mangoes are sweet and juicy.");
//     break;
//   default:
//     console.log("I don't know that fruit.");
// }
// // Output:
// // Mangoes are sweet and juicy.
/* 

Loops in JavaScript are used to repeat a block of code multiple times — without having to write that code again and again.

1. for Loop
Use: When you want to repeat a task a specific number of times.

Example:
*/
for (let num = 1; num <= 3; num++) {
  console.log("Welcome user " + num);
}
/*
Explanation:
- num = 1 → starting point
- num <= 3 → loop runs while condition is true
- num++ → increment each time
Output:
  Welcome user 1
  Welcome user 2
  Welcome user 3
*/


/* 
2. while Loop

Use: When you don’t know how many times to run beforehand (e.g., condition-based).
*/
let battery = 10;
while (battery > 0) {
  console.log("Battery level: " + battery + "%");
  battery -= 2;
}
/*
Explanation:
- Starts with battery = 10
- Reduces by 2% each time
- Stops when battery is 0 or less
Output:
  Battery level: 10%
  Battery level: 8%
  ...
  Battery level: 2%
*/


/* 
3. do...while Loop

Use: To always execute at least once, even if the condition is false.
*/
let attempts = 1;
do {
  console.log("Login attempt: " + attempts);
  attempts++;
} while (attempts <= 2);
/*
Explanation:
- Prints the attempt count first
- Then checks the condition
Output:
  Login attempt: 1
  Login attempt: 2
*/


/* 
4. for...of Loop

Use: To loop through elements in a string or array.
*/
let language = "JS";
for (let char of language) {
  console.log(char);
}
/*
Output:
  J
  S
*/

let scores = [85, 90, 95];
for (let score of scores) {
  console.log("Score is: " + score);
}
/*
Output:
  Score is: 85
  Score is: 90
  Score is: 95
*/


/* 
5. for...in Loop

Use: To loop through object properties (keys).
*/
let car = { brand: "Toyota", model: "Corolla" };
for (let key in car) {
  console.log(key + " → " + car[key]);
}
/*
Explanation:
- Iterates over keys: brand, model
Output:
  brand → Toyota
  model → Corolla
*/


/*
Summary :

| Loop Type    | Used For                           | Real Example              |
| ------------ | ---------------------------------- | ------------------------- |
| for          | Known number of repetitions        | Displaying top 3 users    |
| while        | Unknown repetitions                | Draining battery until 0  |
| do...while   | At least once before checking      | Ensuring login attempt    |
| for...of     | Loop through values (array/string) | Reading letters in a word |
| for...in     | Loop through object keys           | Displaying car details    |
*/
