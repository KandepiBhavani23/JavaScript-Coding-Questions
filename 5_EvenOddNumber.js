const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenArray = [];
const oddArray = [];
const evenOdd = numbers.filter((eachEle) => {
	if (eachEle % 2 === 0) {
		evenArray.push(eachEle);
	} else {
		oddArray.push(eachEle);
	}
});

console.log(oddArray);
console.log(evenArray);
