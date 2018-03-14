// BIND()

// how does it works?
// Bind is a method used to associate the 'this' keywork with a object
// and it also allows you to define paraments that will be constant to
// the function call

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    console.log(this.distance + unit + caption);
  }
};
 
const roadTrip2 = {
  distance: 5000
};
 
const getTripDistance = roadTrip1.getDistance.bind(roadTrip1, 'km'); // 3000km in total
// if we pass the same method with the roadTrip2 as the first bind parameter, ' miles' as
// the second and ' left to go' as the thirsd the return value will be: 
// => 5000 miles left to go
 
// getTripDistance(' in total');


