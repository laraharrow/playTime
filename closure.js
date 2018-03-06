/*

What is closure?
	A great way to protect variables from the gloval scope
	closure is an inner function that has access to the scope of an enclosing funtion

	closure has access to variable and paramenters in 3 different scopes
		- the variables on the global scope
		- the variables/param on its own scope
		- the variables/param on the outter function 
*/

const globalScope = 'global scope';

function outter(param1) {
	const var1 = 'var one';

	function inner(param2) {
		const var2 = 'var two';

		console.log('this is globalScope: ', globalScope);
		console.log('this is var1: ', var1);
		console.log('this is var2: ', var2);
		console.log('this is param1: ', param1);
	}
	inner('param one');
}

outter('param two')


// here is the return value to prove that out inner function has access to all this data
// this is globalScope:  global scope
// this is var1:  var one
// this is var2:  var two
// this is param1:  param two