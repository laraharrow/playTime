// write a function that can be called in 2 ways:
// myFunc(10, 20) || myFunc(10)(20)

function getTotal() {
	var args = [...arguments];
	if (args.length === 2) {
		return args[0] + args[1];
	} else if (args.length === 1){
		return function(num) {
			return args[0] + num;
		}
	}
}

console.log(getTotal(10)(20));
console.log(getTotal(10, 20));
console.log(getTotal(40)(200));
console.log(getTotal(40, 200));
