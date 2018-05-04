// 'use strict'

// function generate(testLengthArray){
//   return Array.from({length : testLengthArray.length})
//     .map(item => ({
//       input: Array.from({length: item}).map(item => [10000]),
//       target: 0,
//       output: -1
//     })
//   ); // Remove this line and change to your own algorithm
// }
// console.log(generate(100))
function randomInt(range) {
  return Math.floor(Math.random() * range);
}

function vomitArray(count) {
  const item = [];

  function born(array, first, step) {
    array.push(first + Math.floor(Math.random() * step));
    return array.length === count ? array : born(array, first + step, step);
  }
  
  return born(item, -10000, Math.floor(20000/count));
};

function makeTargetIndex(arrIdx, arrLength) {
  const remainder = arrIdx % 4;
  return remainder == 0 ? 0 : 
         remainder == 1 ? arrLength :
         remainder == 2 ? arrLength + 1 : randomInt(arrLength);
}

function generate(testLengthArray) {
  const result = testLengthArray.map((length, index) =>({
      input: vomitArray(length),
      target: vomitArray(length)[makeTargetIndex(index, length)],
      output: makeTargetIndex(index, length)

    })  
  );
  return result;
};

console.log(generate([1,3,4,5,6]))
// console.log(vomitArray(100))

// module.exports = generate
