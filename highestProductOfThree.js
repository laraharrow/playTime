/*

Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

*/

const arrayOfInts = [1, 10, -5, 1, -100, -6];// [3, 5, 7, 2, 9, 12, 6];

const highestProductOfThree = function(int) {
  // create an array to store 3 highest integer [3]
  let positiveStore = [];
  let negativeStore = []
  // add int[0] to array
  positiveStore.push(int[0]);
  
  if (int[0] < 0) {
  	negativeStore.push(int[0]);
  }
  console.log('before loop', positiveStore, '||', negativeStore);
  // itarate throu the array starting at 1
  for (let i = 1; i < int.length; i++) {
		// check if element is negative
		if (int[i] < 0) {
			// create var to store 2 lower values
			let positionZero = 0;
			let positionOne = 0;
			// find to lower values if negativeStore already has 1 element
			if (negativeStore.length === 1) { // [positionZero]
				// store in negativeStore lowest val at [0] and second lowest val at [1]
				positionZero = Math.min(negativeStore[0], int[i]);
				positionOne = Math.max(negativeStore[0], int[i]);	

			// find to lower values if negativeStore already has 2 element			
			} else if (negativeStore.length === 2) { // [positionZero, positionOne]
				// check if the lowest val in negativeStore is lowest the the int element
				if (negativeStore[0] > int[i]) {
					// if so store in negativeStore that val as [0] and the [0] as index [1] 
					positionZero = int[i];
					positionOne = negativeStore[0];
				// check if the int element is only lower then negativeStore[1]	
				} else if (negativeStore[1] > int[i]) {
					// update negativeStore[1] to be the int element
					positionZero = negativeStore[0];
					positionOne = int[i];
				}
			}
			// update negativeStore
			negativeStore[0] = positionZero;
			negativeStore[1] = positionOne;
		// in case int element is positive	
		}
		// for any value of int
		if (int[i]) {
			// check if array[0] exists and if its less then new value
			if (positiveStore[0] < int[i]) {
				// use splice to add new val before array[0]
				console.log('before splice ', positiveStore);
				positiveStore.splice(0, 0, int[i]);
				console.log('after splice ', positiveStore);
			// else if arra[1] exists and if its  less then
			} else if (positiveStore[1] && positiveStore[1] < int[i]) {
				// use splice to add new val before array[1]
				positiveStore.splice(0, 0, int[i]);
			// else if array[2] exists and if its less then
			}	 else if (positiveStore[2] && positiveStore[2] < int[i]) {
				// use splice to add new val before array[1]
				positiveStore.splice(0, 0, int[i]);
			}	
			// use splice to remove all lements to keep positiveStore.length = 3
			if (positiveStore.length > 3) {
				positiveStore.splice(3);
			}	
		}			
  }	
  console.log('after loop', positiveStore, '||', negativeStore);
  let negativeProduct = 0;
  let positiveProduct = 0;
  let product = 0;
  // check if all values in negativeStore are negative
  if (negativeStore[0] < 0 && negativeStore[1] < 0) {
  	positiveProduct = positiveStore[0] * positiveStore[1] * positiveStore[2];	
  	negativeProduct = positiveStore[0] * negativeStore[0] * negativeStore[1];
  	product = Math.max(positiveProduct, negativeProduct);
  } else {
  	product = positiveStore[0] * positiveStore[1] * positiveStore[2];
  }
  console.log(product);
  return product;
}

highestProductOfThree(arrayOfInts);

var foo = [1];
foo.splice(0, 0, 2);
console.log(foo);




