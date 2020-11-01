const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayA, arrayB) {
  const resultEq = eqArrays(arrayA, arrayB);

  if (resultEq) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

module.exports = assertArraysEqual;

