// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

const result1 = countLetters("Lighthouse in the house");
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["L"], 1);
assertEqual(result1["a"], 0);
assertEqual(result1["g"], 1);
assertEqual(result1["b"], 0);
