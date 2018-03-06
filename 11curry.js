/*
trusnform this code to be curried:

function getProduct(num1, num2) {
  return num1 * num2;
}
*/

function getProduct(num1) {
	return function(num2) {
		return num1 * num2
	}
}

console.log(getProduct(2)(4));


// on a more useful way with getTravelTime:
// function getTravrlTime(distance, speed) {
// 	return distance / speed;
// }

// lets say we are calculating multiple speeds to the same destination
// using curring would be very usiful:

function getTravrlTime(distance) {
	return function(speed) {
		return distance / speed;
	}
}

const travelTimeBosNY = getTravrlTime(400);
const travelTimeMiamiAtlanta = getTravrlTime(600);

// now you can call
console.log(travelTimeBosNY(50), travelTimeBosNY(80), travelTimeBosNY(100));


