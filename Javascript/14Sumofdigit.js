let num = 456, sum = 0, temp = num;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of digits of", temp, "is:", sum);
