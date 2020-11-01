const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], []);
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,"3"]);
assertArraysEqual([1], [1,2,3,4]);
assertArraysEqual(["Hello", "Hi"],["Hello", "Hi"]);
assertArraysEqual(["hello"], ["Hello"]);