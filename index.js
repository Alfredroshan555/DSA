/**
 * Problem Solving and DSA training in JavaScript
 */

// Q1. Find the largest number in an array
const array = [2, 10, 4, 5, 6, 11, 12, 13];

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

// Q2. Find the second largest number in an array ==>  TODO: Complete this next day
const getSecondLargestNumber = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const secondLargestNumber = getSecondLargestNumber(array);
console.log("secondLargestNumber", secondLargestNumber);
