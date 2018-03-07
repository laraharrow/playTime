// Write a function that keeps track of how many times it was called and returns 
// that number - all the code shoudl be in the scope of countFunctionCalls.

function countFunctionCalls() {
	let count = 0;
	return function() {
		count++;
		return count;
	};
}


// console.log(countFunctionCalls()());
// console.log(countFunctionCalls()());
// console.log(countFunctionCalls()());

// if you run the console log you would get 1, 1 and 1
// but if you set the values to a const you can keep track of it.

const instanceOne = countFunctionCalls();
const instanceTwo = countFunctionCalls();

// now console.log each instance as many times as needed:
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());

// the result of this would be:
// instanceOne:  1
// instanceOne:  2
// instanceOne:  3
// instanceTwo:  1
// instanceTwo:  2
// instanceOne:  4

// This can be very useful if you only want to call a function 3 times
// using an if statemt you can throw an error if its called more then 3 times

/*

function countFunctionCalls() {
	let count = 0;

	return function() {
		count++;
		if (count > 3) {
			// do something here...
			return count;
		} else {
			// throw error
		}
	};
}
*/


