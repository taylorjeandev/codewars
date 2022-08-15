// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

function grader(score) {
    if(score >= 0.9 && score <= 1.0){
        return 'A'
    }else if(score >= 0.8 && score < 0.9){
        return 'B'
    }else if(score >= 0.7 && score < 0.8){
        return 'C'
    }else if(score >= 0.6 && score < 0.7){
        return 'D'
    }else{
        return 'F'
    }
}

//Parameter: 1 parameter which will be an integer to the tenth.
//Return: will return a string of a single letter
//Example: will return A if score is between .9 and 1
//PsuedoCode: Write a conditional, for the potential different outcomes, return string based on condition


// Test.assertEquals(grader(0.7), "C");
// Test.assertEquals(grader(0.9), "A");
// Test.assertEquals(grader(0.6), "D");