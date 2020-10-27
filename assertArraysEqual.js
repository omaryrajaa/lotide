const assertArraysEqual = function(array1, array2) {
  let equal = true;
  let actual = array1;
  let expected = array2;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equal = true;
      } else {
        equal = false;
      }
    }
  } else {
    equal = false;
  }

  if (equal === true) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([], []);
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,"3"]);
assertArraysEqual([1], [1,2,3,4]);
assertArraysEqual(["Hello", "Hi"],["Hello", "Hi"]);
assertArraysEqual(["hello"], ["Hello"]);