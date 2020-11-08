# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @omaryrajaa/lotide`

**Require it:**

`const _ = require('@omaryrajaa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: It should not return the first element as an array. It should simply return the element itself.
* `tail(array)`: It should return the "tail" of an array: everything except for the first item (head) of the provided array.
* `middle(array)`: It should return the middle-most element(s) of the given array.
* `without(sourceArray, itemsToRemove)`: It should return a subset of a given array, removing unwanted elements.
* `takeUntil(array, callback)`: It should return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `map(array, callback)`: It should return a new array based on the results of the callback function
* `letterPositions(sentence)`: It should return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(ObjectA, value)`: It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `findKey(object1, callback)`: It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `countOnly(allItems, itemsToCount)`: It should take in a collection of items and return counts for a specific subset of those items.
* `countLetters(sentence)`: It should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `eqObjects(object1, object)`:It should Returns true if both objects have identical keys with identical values.Otherwise you get back a big fat false!
* `eqArrays(array1, array2)`: It takes in two arrays and returns true or false, based on a perfect match.




* head): returns the first element in an array.

* function(tail): remove the head of the array and returns the rest.

* function(countLetters): returns an object which contains each letter in a string with its number of occurrences.

* function(countOnly): counts items in an array that satisfies a given array of items.

* function(eqArrays): compares two arrays return Boolean.

* function(eqObjects): compares two objects return Boolean.

* function(findKey): search the object and return the first key which satisfies a given callback.

* function(findKeyByValue): returns the key in an object where its value matches a given value.

* function(letterPositions): returns an object with every letter in a string (as key) and its position (as value).

* function(map): creates a new array with the result of calling a callback function applied on every element in the calling array.

* function(middle): returns the middle element(s) of an array.



* function(takeUntil): returns a slice of the array with elements taken from the beginning until a callback function is satisfied.