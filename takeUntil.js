/*

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/
const takeUntil = function(array, callback) {
  let result = [];

  for (let item of array) {

    if (callback(item)) return result;
    else result.push(item);
  }
  return result;
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

//tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = [25, 63, 87];
const results3 = takeUntil(data3, x => x > 10);
assertArraysEqual(results3, []);