//Find Second Largest Value and remove first largest value in an array

const array = [1, 2, 3, 14, 12, 11, 10, 9];

const sortedArray = array.slice();
sortedArray.sort((a, b) => b - a);

console.log(array);
console.log(sortedArray[1]);
