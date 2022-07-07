// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let uniqueChars = [...new Set(a)];
    return uniqueChars
}

// Test.assertSimilar(distinct([1]), [1]);
// Test.assertSimilar(distinct([1,2]), [1,2]);
// Test.assertSimilar(distinct([1,1,2]), [1,2]);