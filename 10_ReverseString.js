const string = "This is JavaScript Code";

//Reverse the whole String
const stringReverse = string.split(" ").reverse().join(" ");
console.log(stringReverse); //Code JavaScript is This

//Reverse the individual String
const splitString = string.split(" ");
const strReverse = splitString
	.map((str) => str.split("").reverse().join(""))
	.join(" ");
console.log(strReverse);
