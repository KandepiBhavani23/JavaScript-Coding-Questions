const vowels = ["a", "e", "i", "o", "u"];
const string = "Hello World";

const vowelsArray = [];

function findVowels(str) {
	for (let i = 0; i <= string.length; i++) {
		if (vowels.includes(string[i])) {
			vowelsArray.push(string[i]);
		}
	}
	return vowelsArray.join(",");
}

console.log(findVowels(string));
