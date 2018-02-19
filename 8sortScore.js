/*
Given an unsorted array with all scores of a game, 
return a sorted array of scores in less than O(n log n).
*/

let unsortedScore = [37, 89, 53, 0, 41, 91, 53];
let highestPossobleScore = 100;

const sortScore = function(scores, max) {
  
  // create an empty array to store score counts
  // create an empty array to store sorted score
  let scoreCount = [];
  let scoreSorted = [];
  
  // populate the scoreCount array with value 0 as many times as the max score. 
  for (let i = 0 ; i <= max; i++) {
    scoreCount.push(0);
  }

  // add 1 to each element on scoreCount array for every time that score appears on scores
  scores.forEach(function(score) {
    scoreCount[score]++;
  })

  // for each element in the scoreCount array, loop as many times as its value and push the index to the sorted array     
  for (let score = max; score >= 0; score--) {
    let count = scoreCount[score];

    for (let time = 0; time < count; time++) {
      scoreSorted.push(score);
    }
  }
  return scoreSorted;
}

sortScore(unsortedScore, highestPossobleScore);