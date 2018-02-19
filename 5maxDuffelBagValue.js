/*
You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit
margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen 
of England.
While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
Each type of cake has a weight and a value, stored in an object with two properties:
weight: the weight of the cake in kilograms
value: the monetary value of the cake in British shillings
You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the 
maximum monetary value the duffel bag can hold.

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing 
or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous 
about keeping our algorithms flexible and comprehensive.
*/

var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

var capacity = 20;

function maxDuffelBagValue(cakes, weightCap) {
  // create an array with values 0 for each index from 0 to cap
  let maxValPerCap = [];
  for (let i = 0; i < weightCap; i++) {
    maxValPerCap[i] = 0;
  }  

  //loop throught he cap to store the best value for each weight between 0-cap
  for (let currentCap = 0; currentCap <= weightCap; currentCap++) {
      // set a variable to hold the maxValueSoFar for currentCapacity
      let maxValSoFar = 0;
      // loop through all cakes
      for (let i = 0; i <= cakes.length; i++) {
        // set cake equal to the cake of this itaration
        let cake = cakes[i];

        // if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
        if (cake.weight === 0 && cake.value !== 0) {
          return Infinity;
        }
        // check if the cake weight is less or equla to the caps itaration (outter loop)
        if (cake.weight <= currentCap) {
            // create a var to store the maxValue for that cake the value of the cake at index plus the value stored 
            // in the array that has the weight that is left after adding the cake value
            let maxValWithCake = cake.value + maxValPerCap[currentCap - cake.weight];
            // find the greatest value between the maxValue and the maxValueSoFar
            maxValSoFar = Math.max(maxValWithCake, maxValSoFar);
        }   
      }     
      // add each capacity's max value to our array so we can use them
      // when calculating all the remaining capacities
      maxValPerCap[currentCap] = maxValSoFar;
  }    
  //return the maxVAlue at cap
  return maxValPerCap[cap];
}

console.log(maxDuffelBagValue(cakeTypes, capacity));
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)

/*

THOUGHT PROCESS:

  *** if we find the weight/value ratio we can add the most amount of the higher cake and fill up the rest based on the weight.
    ~ the problem with that is that sometimes a product with a bit less ratio value can be multiplied more times:
    example:
{weight: 3, value: 40}
{weight: 5, value: 70}
if we had those 2 values the ratio would be 13.333 and 14
if the capacity is 8 we can have one of each cake
but if we have 9 the function would end up with the same result but inreality having 3 of the first cake would be better.


  *** if we can keep track of all the highest values for each weight from zero to capacity that way we can keep looking back at 
  the values stored and find the best combination. This will give us the best answer but its important to be aware that if the capacity
  is very hight and if the array of cakes is to long this function is not optimazed and it would take a long time, maybe even
  break our code because of stack overflow.


*/