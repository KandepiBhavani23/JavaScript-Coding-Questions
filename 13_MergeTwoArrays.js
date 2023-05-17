// Merge Two Arrays and Sort them

const array1 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
const array2 = [11, 13, 15, 17, 19, 12, 14, 16, 18, 20];

//Method 1
const mergeArray = [...array1, ...array2];
const sortArray = mergeArray.sort((a, b) => a - b);
console.log(sortArray);

//Method 2
const mergeArray1 = array1.concat(array2);
const sortArray1 = mergeArray1.sort((a, b) => a - b);
console.log(sortArray1);
