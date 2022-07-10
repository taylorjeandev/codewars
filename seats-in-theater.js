// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96
// Here is what the theater looks like:



// Input/Output
// [input] integer nCols

// An integer, the number of theater's columns.

// Constraints: 1 ≤ nCols ≤ 1000.

// [input] integer nRows

// An integer, the number of theater's rows.

// Constraints: 1 ≤ nRows ≤ 1000.

// [input] integer col

// An integer, the column number of your own seat (with the rightmost column having index 1).

// Constraints: 1 ≤ col ≤ nCols.

// [input] integer row

// An integer, the row number of your own seat (with the front row having index 1).

// Constraints: 1 ≤ row ≤ nRows.

// [output] an integer
// The number of people who sit strictly behind you and in your column or to the left.

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row)
}

// Test.assertEquals(seatsInTheater(16,11,5,3) , 96)

// Test.assertEquals(seatsInTheater(1,1,1,1) , 0)

// Test.assertEquals(seatsInTheater(13,6,8,3) , 18)

// Test.assertEquals(seatsInTheater(60,100,60,1) , 99)
