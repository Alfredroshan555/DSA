/**
 * Problem Solving and DSA training in JavaScript
 */

// Find the largest number in an array
const array = [
  1, 2, 4, 2, 2, 11111111111, 3, 4, 6, 8, 9, 7, 11, 223, 444, 1000,
];

// Using normal for loop
const getLargetNumberInArr = (arr) => {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

/**
 * We can have the same result by using map/foreach/reduce etc for different usecases.
 * Map returns a new array without modifying the existing array.
 * forEach loops through the entire array and performs functions on each element of the array inside the callback(loop)
 */
const getLargestNumberUsingMap = (arr) => {
  let largest = 0;
  arr.forEach((num) => {
    if (num > largest) {
      largest = num;
    }
  });
  return largest;
};

// const largestNumber = getLargetNumberInArr(array); // Using normal for loop
const largestNumber = getLargestNumberUsingMap(array); // using map function
