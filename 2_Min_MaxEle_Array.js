const array = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10, 7];

//Inbuilt Function
const MinElement = Math.min(...array);
const MaxElement = Math.max(...array);
console.log(MinElement);
console.log(MaxElement);

//Using For Loop
min = array[0];
for (let i = 0; i < array.length; i++) {
	if (array[i] < min) min = array[i];
}
console.log(min);

max = array[0];
for (let i = 0; i < array.length; i++) {
	if (array[i] > max) max = array[i];
}

console.log(max);

//Using Reduce
function MinMaxElement(array) {
	const MinElements = array.reduce((acc, current) =>
		acc < current ? acc : current
	);

	const MaxElements = array.reduce((acc, current) =>
		acc > current ? acc : current
	);

	console.log(MinElements, MaxElements);
}

MinMaxElement(array);
