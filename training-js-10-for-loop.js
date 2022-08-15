// Task
// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

function pickIt(arr){
    var odd=[],
        even=[];

    for(let i = 0; i < arr.length; i++)
    if (arr[i] % 2 == 0) {
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
    return [odd, even]
}

// Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
// Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
// Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
// Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
// Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
// Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
