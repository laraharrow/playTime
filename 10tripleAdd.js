function tripleAdd(val1) {
	return function (val2) {
		return function (val3) {
			return val1 + val2 + val3;
		}
	}
}

/* 
Curring a function is a sequence of function that has a function as its return value
uses the value of the outer function on its body because of closure


*/
// returns total of all 3 numbers added together 
console.log(tripleAdd(10)(20)(30));