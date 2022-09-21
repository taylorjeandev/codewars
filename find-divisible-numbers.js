// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
    return numbers.filter(numbers => numbers % divisor == 0);
}

//p: 1 parameter will be an array of numbers, which we want the 2nd parameter to be divisible by.
//r: we want to return an array
// e: // Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//p: 

// Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
// Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
// Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
// Test.assertDeepEquals(divisibleBy([0], 4), [0]);
// Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
