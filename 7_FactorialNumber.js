const number = 100;
let fact = 1;

if (number < 0) {
	console.log(`Factorial of ${number} is not possible`);
} else if (number === 0) {
	console.log(`Factorial of ${number} is ${fact}`);
} else {
	for (let i = 1; i <= number; i++) {
		fact *= i;
	}
	console.log(`Factorial of ${number} is ${fact}`);
}
