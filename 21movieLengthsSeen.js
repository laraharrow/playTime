/*

You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory

*/

// function takes filghtLength and array of moviesLengths
const canTwoMoviesFillFlight = function(flightLength, moviesLengths) {
  // create a set to add movies checked => veriable = new Set();
  let moviesChecked = new Set();

  // for loop through the movies array
  for (let i = 0; i < moviesLengths.length; i++) {
    //make every movie in the loop the firstMovieLength
    let firstMovieLength = moviesLengths[i];

    // create a variable to store the size of second movie, based on flightLength minus firstMovieLength
    let matchingSecondMovieLength = flightLength - firstMovieLength;
    // check if the Set has a movie with length equal to expression above
    if (moviesChecked.has(matchingSecondMovieLength)) {
      // if so break the loop and return true
      return true;
    }

    // make sure to add the firstMovieLength to our set.
    moviesChecked.add(firstMovieLength);
  }
  // if no matched time was found return false.
  return false;
};

const foo = [120, 140, 98, 125];

console.log(canTwoMoviesFillFlight(245s, foo));
