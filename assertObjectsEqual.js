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
 
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else if (Object.keys(object1).length === 0 && Object.keys(object1).length === 0) {
    return true;
  } else {
    for (const element in object1) {
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        if (object1[element] === object2[element]) {
          result = true;
        } else {
          return false;
        }
      }
    
    }

  }

  return result;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const resultEq = eqObjects(actual, expected);

  if (resultEq) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1}, {a: 1}); //==> Pass
assertObjectsEqual({a: 1}, {a:2});  //==> Fail
assertObjectsEqual({a: 1}, {b: 1}); //==> Fail
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}); //==> Pass
assertObjectsEqual({b: 1, a: 2}, {a: 2, b: 1}); //==> Pass
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}); //==> Pass
assertObjectsEqual({}, {}); //==> Pass ?
assertObjectsEqual({a: 1, b: [2, 6]}, {a: 1, b: [2, 6]}); //==> Pass
assertObjectsEqual({a: [1, 0], b: [2, 6]}, {a: [1, 0], b: [2, 6]}); //==> Pass
