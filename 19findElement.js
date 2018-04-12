/*

Suppose we had an array of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?

*/

const devide = function(beginning, end) {
	return Math.floor(beginning + (end - beginning) / 2);
};

const findElement = function(arr, n, beginning, end) {
	let midIdx = devide(beginning, end);

	if (beginning + 1 === end && arr[end] !== n) {
		return false;
	}

	if (arr[midIdx] === n) {
		return true;
	} else {
		return n > arr[midIdx] ? findElement(arr, n, midIdx, end) : findElement(arr, n, beginning, midIdx);
	}
};

let foo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(findElement(foo, 7, 0, foo.length - 1));

/*

SOLUTION


Because the array is sorted, we can use binary search to find the item in O(lg{n}) time and O(1) additional space.

*/
