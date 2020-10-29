/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/
const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
};

const assertArraysEqual = function(arrayA, arrayB) {
  const resultEq = eqArrays(arrayA, arrayB);

  if (resultEq) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const eqArrays = function(array1, array2) {
  let equal = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equal = true;
      } else {
        equal = false;
        break;
      }
    }
  } else {
    equal = false;
  }
  return equal;
};

const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const words2 = ["ground"];
const results2 = map(words2, word => word[0]);
assertArraysEqual(results2, ["g"]);

const words3 = [];
const results3 = map(words3, word => word[0]);
assertArraysEqual(results3, []);

const words4 = ["1", "2"];
const results4 = map(words4, word => word[0]);
assertArraysEqual(results4, ["1", "2"]);