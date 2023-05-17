const string = "madam";

//Method 1
const temp = [];
for (let i = string.length - 1; i >= 0; i--) {
	temp.push(string[i]);
}
if (string === temp.join("")) {
	console.log("Palindrome");
} else {
	console.log("Not Plaindrome");
}

// Method 2
const ReverseStr = (str) => {
	let reverseStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}
	return reverseStr;
};
const revStr = ReverseStr("madam");
if (string === revStr) {
	console.log("Palindrome");
} else {
	console.log("Not Plaindrome");
}

//Method 3

let revseStr = string.split("").reverse().join("");
if (string === revseStr) {
	console.log("Palindrome");
} else {
	console.log("Not Palindrome");
}
