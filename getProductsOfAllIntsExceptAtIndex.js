/*

write a function getProductsOfAllIntsExceptAtIndex() that takes an 
array of integers and returns an array of the product of all other 
elements but the one on that index.

*/

const num =   [2, 4, 10];
					 // [1, 2, 8]
					 //	[, 8]	

getProductsOfAllIntsExceptAtIndex = function(numbers) {
	// create an array to store the products
	let products = [];
	// itarate throu the array
	let prod = 1;
	
	// itarate to numbers getting the product of all elements before idx
	// store it on the products array
	for (let i = 0; i < numbers.length; i++) {
		products[i] = prod;
		prod *= numbers[i];
	}
	console.log(products);

	// itarate numbers backword and multiply its values by the numbers
	// stored on products
	prod = 1; // 10, 40
	for (let j = numbers.length -1; j >= 0; j--) {
		products[j] *= prod;
		prod *= numbers[j];
	} 
		
	/* naive solution
		// create a variable to store product
		let prod = 1;
		// inner for loop
		for (let j = 1; j < numbers.length; j++) {
			// if idx of inner array is different then idx outter array 
			if (j !== i) {
				// multiply product by the inner array idx element
				prod *= numbers[j];
			}
		}
		// add product to products array
		products.push(prod);
	}	
*/


	// return products array.	
	return products;
}

getProductsOfAllIntsExceptAtIndex(num);