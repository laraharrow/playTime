/*
A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.

They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.

Two rectangles overlapping a little. It must be love.
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this:

var myRectangle1 = {

  // coordinates of bottom-left corner
  leftX: 8,
  bottomY: 8,

  // width and height
  width: 3,
  height: 2,

};


var myRectangle2 = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // width and height
  width: 6,
  height: 5,

};
Your output rectangle should use this format as well.
*/

// subproble, compare each line separetely first.
const findLineOverlap = function(p1, l1, p2, l2) {
  // heiest value between start points
  let highestStartPoint = Math.max(p1, p2);
  //
  let lowestEndPoint = Math.min(p1 + l1, p2 + l2);

  return highestStartPoint >= lowestEndPoint
    ? { startPoint: null, overlapLength: null }
    : { startPoint: highestStartPoint, overlapLength: lowestEndPoint - highestStartPoint };
};

const findRectangularOverlap = function(r1, r2) {
  let xOverlap = findLineOverlap(r1.leftX, r1.width, r2.leftX, r2.width);
  let yOverlap = findLineOverlap(r1.bottomY, r1.height, r2.bottomY, r2.height);

  return !xOverlap.overlap || !yOverlap.overlap
    ? {
        leftX: null,
        bottomY: null,
        width: null,
        height: null
      }
    : {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength
      };
};

