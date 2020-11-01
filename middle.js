

const middle = function(array) {
  
  /*
  The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

  - For arrays with one or two elements, there is no middle. Return an empty array.
  - For arrays with odd number of elements, an array containing a single middle element should be returned.
  - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/
  let middleElemets = [];
  const lengthArray = array.length;
  if (lengthArray > 2) {
    if (lengthArray % 2 !== 0) {
      middleElemets.push(array[Math.floor(lengthArray / 2)]);
    } else {
      middleElemets.push(array[(lengthArray / 2) - 1], array[(lengthArray / 2)]);
    }
  }
  return middleElemets;
};

module.exports = middle;
