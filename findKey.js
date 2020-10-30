/*

Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/
const findKey = function(object1, callback) {
  let firstTruthyKey;
  for (let item in object1) {

    if (callback(object1[item])) {
      firstTruthyKey = item;
      return firstTruthyKey;
    }
  }

  return firstTruthyKey;
};


//assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2714)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 }}, x => x.stars === 1), "Blue Hill");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 4 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined);

assertEqual(findKey({}, x => x.stars === 2), undefined);