'use strict'

function randomInt(range) {
  return Math.floor(Math.random() * range);
}

function vomitArray(arrIdx, count) {
  const item = [];

  function makeTargetIndex(arrIdx, arrLength) {
    const remainder = arrIdx % 4;
    return remainder == 0 ? 0 : 
           remainder == 1 ? -1 :
           remainder == 2 ? arrLength - 1 : randomInt(arrLength);
  }

  const bornArr = Array.from({ length: count }).map((u, i) => Math.floor((-10000 + (i+1) * Math.floor(20000/count) - (i+1) * Math.random() * Math.floor(20000/count))));
  const bornTarget = makeTargetIndex(arrIdx, count);

  return {
    input : bornArr,
    target : bornTarget == -1 ? 10001 : bornArr[bornTarget],
    output: bornTarget
  }
};

function generate(testLengthArray) {
  const result = testLengthArray.map((length, index) =>vomitArray(index, length))
  return result;
};


module.exports = generate
