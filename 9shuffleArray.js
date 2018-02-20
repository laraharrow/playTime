/*
Write a function for doing an in-place shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have the 
same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) 
for getting a random integer that is >= floor and <= ceiling.
*/

/*

notes: 
  to replace the order of elements in place you need to store the elements when you swap so we keep both elements save.

*/

// getRandom = random number between floor and ceiling
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// shuffle = 
function shuffle(array) {
  // if array has 1 or less elements return array
  if (array.length <= 1) {
    return array;
  }
  // itarate through every element in the array
  for (let i = 0; i < array.length; i++) {
    // save in a var the call to getRandom where min = index of loop and max = array's length
    let randomNum = getRandom(i, array.length - 1);
    // if the return value from getRandom is different then the index of the loop
    if (randomNum !== i) {
      // create a var to store the val and have its value equal to array at loops index
      let valueToShuffle = array[i];
      // swap the val stored line above with the value of that index in the array
      array[i] = array[randomNum];
      array[randomNum] = valueToShuffle;
    }  
  }
  // return the array shaffled    
  return array;
}      

let foo = [1,2,3];
console.log(shuffle(foo));
