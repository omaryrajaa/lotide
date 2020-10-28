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

/*const eqArrays = function(array1, array2) {
  let equal = true;
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
  return equal;
};
*/

const without = function(sourceArray, itemsToRemove) {
  let result = [];
  let equalValue = false;


  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        equalValue = true;
        break;
      } else {
        equalValue = false;
      }
    }
    if (equalValue === false) {
      result.push(sourceArray[i]);
    }
    
  }

  return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

/*const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/

console.log(without([1, 2, 3], [1, 2]));

assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3, "4", 1, 2, 3, 4], [1, 2, 3]), ["4", 4]);
