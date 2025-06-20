let num = 1234, rev = 0, original = num;
while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}
console.log("Original number:", original);
console.log("Reversed number:", rev);
