/*
Whats the difference between == & === ?
The main difference here is that ==(equals) tests for abstract equality
and does not test for data type, and ===(strict equals) tests for strict
equality so it does test for data type
*/

// example 1:
console.log(1 == '1'); // => true
console.log(1 === '1'); // => false
// the reason for that is that the equal(==) egnores the data type while
// the strict equals(===) doesn't so it realises that an integer isn't 
// equal to a string but the equal(==) just compares the numbers.

/*
JS under the hood for equals(==):
when comparing:
	interger & string => string is converted to a interger and compared
	boolean & non-boolean => non-boolean is converted to boolean and compared
	object & primitive data type => obj converted to primitive data type
															 =>	and the compared.	

*/

