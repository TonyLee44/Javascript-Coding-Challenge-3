/* 
Write a function that would allow you to do this:

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"
*/

var run = exercise('running');
var swim = exercise('swimming');

function exercise(exercise) {
        console.log(`Today's exercise: ${exercise}`);
}