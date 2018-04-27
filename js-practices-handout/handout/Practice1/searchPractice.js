'use strict'

function search(input, target) {
  let first = 0;
  let last = input.length - 1;
  while (first <= last) {
    const mid = first + Math.floor((last - first)/2);
    if (target == input[mid]) {
      return mid;
    } else if (target < input[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    };
  };
  return -1
};

module.exports = search

