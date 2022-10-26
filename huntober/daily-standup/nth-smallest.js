// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .
//minimal size of array/list is 3

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

function nthSmallest(arr, num) {
    let sortedArray = arr.sort((a, b) => a - b)
    return sortedArray[num - 1]
}

console.log(nthSmallest([3, 1, 2], 2))
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3))
console.log(nthSmallest([177, 225, 243, - 169, -12, -5, 2, 92], 5))