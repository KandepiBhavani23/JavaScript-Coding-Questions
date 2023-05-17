let a = 10;
let b = 20;

a = a + b; // (10 + 20 = 30)
b = a - b; // (30 - 20 = 10)
a = a - b; // (30 - 10 = 20)

console.log(a, b);

const swap = ([a, b] = [b, a]);
console.log(swap);
