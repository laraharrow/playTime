function tripleAdd(val1) {
	return function (val2) {
		return function (val3) {
			return val1 + val2 + val3;
		}
	}
}


// returns total of all 3 numbers added together 
console.log(tripleAdd(10)(20)(30));