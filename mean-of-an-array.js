// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    return Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length)
  
}

//Parameter will be an array, of positive integers
// We want to return the average of the summed up numbers within the array
//Example We could do a for loop of [2,2,2,2] for a total of 8, / 4 indexes, which gives us an average of 2
//Pseudo Code:

//Math.floor to give us round down to nearest integer

//reducer function to give us the sum

//divide by the length of the array to give us the average.



// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);