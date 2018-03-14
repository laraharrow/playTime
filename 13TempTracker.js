/*

You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.

Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean (the average temperature per all the times the temperature was inserted) of all temps we've seen so far
getMode()—returns a mode (keep records of all the temp inserted and the highest temp) of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() 
over speeding up the insert() method.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume 
they'll all be in the range 0....110.

If there is more than one mode, return any of the modes.

*/

function TempTracker() {
  // create an array with values = 0 and index equla to the potential temp (0 - 110)
  this.occurrences = [];
  for (let i = 0; i < 111; i++) {
    occurrences[i] = 0;
  }
}

// mim & max
this.min = null;
this.max = null;

//mean
this.mean = null;
this.allTemp = 0;
this.allOcurrences = 0;

// mode
this.maxOccurrences = 0;
this.mode = null;

TempTracker.prototype.inseart = function(temp) {
  // mode
  // add 1 to the ocurrences array at index temp
  this.occurrences[temp]++;
  // check if temp is the greatest temp to date
  if (this.ocurrences[temp] > this.maxOccurrences) {
    // if so update the mode as the most ocurred temp and the maxOcurrences as the value at index temp.
    this.mode = temp;
    this.maxOccurrences = this.occurrences[temp];
  }

  //mean
  this.allOcurrences++;
  this.allTemp += temp;
  this.mean = this.allOcurrences / this.allTemp;

  // max & min
  if (this.max === null || this.max > temp) {
    this.max = temp;
  }

  if (this.min === null || this.min < temp) {
    this.min = temp;
  }
};

TempTracker.prototype.getMax = function() {
  return this.max;
};

TempTracker.prototype.getMin = function() {
  return this.min;
};

TempTracker.prototype.getMean = function() {
  return this.mean;
};

TempTracker.prototype.getMode = function() {
  return this.mode;
};

// function TempTracker() {
//   // create an array for every temperature from 0-110 with value = 0
//   // mode
//   this.occurrences = [];

//   for (let i = 0; i < 111; i++) {
//     this.occurrences[i] = 0;
//   }
//   // create variable to store values
//   // min max
//   this.minTemp = null;
//   this.maxTemp = null;

//   // mean
//   this.numberOfReadings = 0;
//   this.totalSum = 0;
//   this.mean = null;

//   //mode
//   this.maxOccurrences = 0;
//   this.mode = null;

// }

// // methods
// TempTracker.prototype.insert = function(temp) {
//   // mode
//   this.occurrences[temp]++;
//   if (this.occurrences[temp] > this.maxOccurrences) {
//     this.mode = temp;
//     this.maxOccurrences = this.occurrences[temp];
//   }

//   // mean
//   this.numberOfReadings++;
//   this.totalSum += temp;
//   this.mean = this.totalSum / this.numberOfReadings;

//   // min max
//   if (this.maxTemp === null || temp > this.maxTemp) {
//     this.maxTemp = temp;
//   }
//   if (this.minTemp === null || temp < this.minTemp) {
//     this.minTemp = temp;
//   }
// }

// TempTracker.prototype.getMax = function() {
//   return this.maxTemp;
// }

// TempTracker.prototype.getMin = function() {
//   return this.minTemp;
// }

// TempTracker.prototype.getMean = function() {
//   return this.mean;
// }

// TempTracker.prototype.getMode = function() {
//   return this.mode;
// }
