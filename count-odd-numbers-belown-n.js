// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

function oddCount(num){
    let newArr = []
    for(let i = 0; i <= num; i++){
        if (num[i] % 2 === 1){
            newArr.push(i)
        }
    }
    return newArr.length;
  
}

//   assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
//   assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");