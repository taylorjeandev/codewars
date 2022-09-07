// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(n){
    return n.reduce((acc, c) => acc + (c * c), 0) //reducing the array while multiplying each index by itself. 
  }

// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);