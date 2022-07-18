// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    let descendingArr = arr.sort((a, b) => b-a);

    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += (descendingArr[i] - descendingArr[i + 1])
    }
    return sum;
}

// Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
// });

// describe("sumOfDifferences([-3, -2, -1])", function() {
//   Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
// });