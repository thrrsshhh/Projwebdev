let n = 7;
let a = 0, b = 1;
console.log("Fibonacci series up to", n, "terms:");
if (n >= 1) console.log(a);
if (n >= 2) console.log(b);
for (let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
