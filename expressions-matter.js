// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a + b * c,
        a * b + c,
        (a + b) * c,
        a * (b + c)
    );
}

//   assert.strictEqual(expressionMatter(2, 1, 2), 6);
//   assert.strictEqual(expressionMatter(2, 1, 1), 4);
//   assert.strictEqual(expressionMatter(1, 1, 1), 3);
//   assert.strictEqual(expressionMatter(1, 2, 3), 9);
//   assert.strictEqual(expressionMatter(1, 3, 1), 5);
//   assert.strictEqual(expressionMatter(2, 2, 2), 8);