'use strict'

function generate(testLengthArray){




  return Array.from({length : testLengthArray.length})
    .map(item => ({
      input: Array.from({length: item}).map(item => [10000]),
      target: 0,
      output: -1
    })
  ); // Remove this line and change to your own algorithm
}
console.log(generate(100))
module.exports = generate
