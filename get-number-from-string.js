// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
}

//P: Parameter will be letters mixed with numbers

//R: we want to return the numbers without the letters in whatever order they might come.

//E:

//P:

// Test.assertSimilar(getNumberFromString("1"), 1);
// Test.assertSimilar(getNumberFromString("123"), 123);
// Test.assertSimilar(getNumberFromString("this is number: 7"), 7);