const arrElement = [12, 14, 36, 48, 60, 72, 84, 96, 108, 120];

//Reduce Method
const sumElements = arrElement.reduce((acc, curr) => acc + curr);
console.log(sumElements);

//For Loop
let sum = 0;

for (let i = 0; i < arrElement.length; i++) {
	sum += arrElement[i];
}

console.log(sum);
