
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

/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
*/
const letterPositions = function(sentence) {
  const results = {};
  let arrayPositions = [];
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      arrayPositions = [];
      arrayPositions[0] = i;
      results[sentence[i]] = arrayPositions;
    }
      
 
  }
  //console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("RAJAA").A, [1,3,4]);
assertArraysEqual(letterPositions("e").e, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);