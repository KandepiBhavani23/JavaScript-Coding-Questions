// Find the missing numbers between a range in the given array

const array = [1, 2, 3, 5, 7, 10];
const missingArray = [];

const minValue = Math.min(...array);
const maxValue = Math.max(...array);

for (let i = minValue; i <= maxValue; i++) {
	if (array.indexOf(i) === -1) {
		//or  if (array.indexOf(i) < 0)
		missingArray.push(i);
	}
}

console.log(missingArray);
