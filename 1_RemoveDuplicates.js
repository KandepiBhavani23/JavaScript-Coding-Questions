const array = [10, 10, 11, 12, 14, 15, 11, 12, 13];

// Using Sets
function removeDuplicates(array) {
	const duplicates = [...new Set(array)];
	return duplicates;
}

console.log(removeDuplicates(array));

// Using Filter
function removeDuplicates1(array) {
	const duplicates = array.filter(
		(eachElement, index) => array.indexOf(eachElement) === index
	);
	console.log(duplicates);
}

removeDuplicates1(array);

//Retun duplicate elements in the list
function findDuplicateEle(array) {
	return array.filter(
		(eachElement, index) => array.indexOf(eachElement) === index
	);
}

console.log(findDuplicateEle(array));
