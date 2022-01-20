/*
Write a function that would allow you to do this:

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));                                                                                                                                                                    

  // prints "Each person gets 4.00 slices of pizza"

console.log(sharePizza(3)); 

  // prints "Each person gets 2.67 slices of pizza"
  */

const sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(numSlice) {
  return function splitPizza(numPeople) {
    const slicePer = (numSlice/numPeople).toFixed(2);
      return (`Each person gets ${slicePer} slices of pizza`);
  }
}

console.log(sharePizza(2));
console.log(sharePizza(3));