/*
Write a function that would allow you to do this:

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));                                                                                                                                                                    

  // prints "Each person gets 4.00 slices of pizza"

console.log(sharePizza(3)); 

  // prints "Each person gets 2.67 slices of pizza"
  */

var sharePizza = cutPizzaSlices(8);
var numPeople = 2;

function cutPizzaSlices(numSlice) {
  return 8;
}

function sharePizza(numSlice, numPeople) {
  console.log(`Each person gets ${numSlice / numPeople} slices of pizza`);
}
console.log(sharePizza());