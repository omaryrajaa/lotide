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
assertArraysEqual([], []);
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,"3"]);
assertArraysEqual([1], [1,2,3,4]);
assertArraysEqual(["Hello", "Hi"],["Hello", "Hi"]);
assertArraysEqual(["hello"], ["Hello"]);