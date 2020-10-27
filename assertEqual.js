// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(10, 130);
assertEqual("rajaa", "rajaa");
