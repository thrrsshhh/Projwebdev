let num1 = 10, num2 = 5;
let operator = '+';
console.log(`Operation: ${num1} ${operator} ${num2}`);

if (operator === '+') {
    console.log("Result:", num1 + num2);
} else if (operator === '-') {
    console.log("Result:", num1 - num2);
} else if (operator === '*') {
    console.log("Result:", num1 * num2);
} else if (operator === '/') {
    console.log("Result:", num1 / num2);
} else {
    console.log("Invalid operator");
}
