const number = -6;

if (number < 0) {
	console.log(`${number} is less than 0, prime number not possible`);
} else if (number === 1) {
	console.log(`${number} is either prime or composite`);
} else {
	for (let i = 2; i <= number; i++) {
		if (number % i === 0) {
			var result = `${number} is not prime number`;
		} else {
			var result = `${number} is prime number`;
		}
	}
	console.log(result);
}
