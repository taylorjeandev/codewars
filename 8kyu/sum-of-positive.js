function positiveSum(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr.reduce((acc, c) => c > 0 ? Number(acc + c) : acc + 0, 0)
}

// let arr = arr.reduce((acc, c) =>{
//     if(acc > 0){
//         return acc + c
//     }
//     return arr
//   })

console.log(positiveSum([-1, -5, 0, 2, 3, 4, 5]), 14);
console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);