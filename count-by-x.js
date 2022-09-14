// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let newArr = [];
    
    for(let i = 1; i <= n; i++){
        newArr.push(x * i)
    }
    
    return newArr;

}
// 2 Parameters that are both positive integers, and will influence the iteration over our arrays
//We want to return an array that is the length of N
// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
//Psuedo Code:

//Declare newArr



// assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
// assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")