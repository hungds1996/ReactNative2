'use strict'

const arr = [-6795, -2462, -12, 0, 506, 7896, 10000]

function binarySearch(input, target) {
    const lo = 0;
    const hi = input.length - 1;
    function check(a, b) {
        const mid = a + Math.floor((b - a)/2)
        return a > b ? -1 : target == input[mid] ? mid : target > input[mid] ? check(mid + 1, b) : check(a, mid -1);
    };
    return check(lo, hi);
};

module.exports = binarySearch