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

const middle = function(array) {
  
  /*
  The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

  - For arrays with one or two elements, there is no middle. Return an empty array.
  - For arrays with odd number of elements, an array containing a single middle element should be returned.
  - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/
  let middleElemets = [];
  const lengthArray = array.length;
  if (lengthArray > 2) {
    if (lengthArray % 2 !== 0) {
      middleElemets.push(array[Math.floor(lengthArray / 2)]);
    } else {
      middleElemets.push(array[(lengthArray / 2) - 1], array[(lengthArray / 2)]);
    }
  }
  return middleElemets;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
