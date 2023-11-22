
// LEETCODE PROBLEMS AND SOLUTIONS

/*
Write a function createHelloWorld. 
It should return a new function that always returns "Hello World".
*/

let createHelloWorld = function() {
    return (...args) => "Hello World";
};
createHelloWorld();

/*
Given an integer n, return a counter function.
This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called 
(n, n + 1, n + 2, etc).
*/

let createCounter= function(n) {
    let counter= n;
    return function(){
        return counter++;
    }
}
const result= createCounter(10);
result();
result();
result();

/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

let createCounter2 = function(init) {
    let currentValue= init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    }
    
};


 const counter = createCounter2(5)
 counter.increment(); // 6
 counter.reset(); // 5
 counter.decrement(); // 4

 // Apply Transform Over Each Element in Array


 /*
 Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
 */

function applyTransformation(arr, fn) {
    const transformedArray = arr.map(fn);
    return transformedArray;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  
  const multiplyByTwo = function (element) {
    return element * 2;
  };
  
  const transformedArray = applyTransformation(originalArray, multiplyByTwo);
  
  console.log(transformedArray); // Output: [2, 4, 6, 8, 10]


  /*
  Given an integer array nums, a reducer function fn,
   and an initial value init, return a reduced array.
   */
   function reduceArray(nums, fn, init) {
    // Using the reduce function to perform the reduction operation
    const result = nums.reduce(fn, init);
    return result;
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5];
  
  const addReducer = function (accumulator, currentValue) {
    return accumulator + currentValue;
  };
  
  const initialValue = 0; 
  
  const reducedValue = reduceArray(nums, addReducer, initialValue);
  
  console.log(reducedValue); // Output: 15 (1 + 2 + 3 + 4 + 5)