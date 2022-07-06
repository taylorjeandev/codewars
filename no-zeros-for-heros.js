// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}

  +`${n}`.replace(/0*$/, "");

// assert.strictEqual(noBoringZeros(1450), 145)
// assert.strictEqual(noBoringZeros(960000), 96)
// assert.strictEqual(noBoringZeros(1050), 105)
// assert.strictEqual(noBoringZeros(-1050), -105)
// assert.strictEqual(noBoringZeros(-105), -105)
// assert.strictEqual(noBoringZeros(0), 0)