// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
    let newArr = []
    for(let i = 0; i <= values.length; i++)
      if(values[i] % 2 == 1){
        newArr.push(values[i])
      }
  return newArr
}

function odds(values){
    return values.filter(v => v % 2);
}

// Test.assertSimilar(odds([]), [], "Should handle empty array");
// Test.assertSimilar(odds([2, 4, 6]), [], "Should handle array with even numbers only");
// Test.assertSimilar(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
// Test.assertSimilar(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");