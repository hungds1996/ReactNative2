'use strict'

function sort(input) {
  if (input.length <= 1) {
    return input;
  }

  var pivot = input[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < input.length; i++) {
    input[i] < pivot ? left.push(input[i]) : right.push(input[i]);
  }

  return sort(left).concat(pivot, sort(right));
}

module.exports = sort