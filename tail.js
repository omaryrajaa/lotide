const assertEqual = function(actual, expected) {
  //console.log(actual);
  //console.log(expected);

  //if ((actual === expected))
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length && actual.every((val, index) => val === expected[index])) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


assertEqual(tail([4,5,6]), [5,6]);
assertEqual(tail([4,5,6,7]), [5,6]);
assertEqual(tail([]), []);
assertEqual(tail([6]), [6]);
assertEqual(tail([5,6]), [5,6]);
assertEqual(tail([4]), []);

