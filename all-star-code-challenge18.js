// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

function strCount(str, letter){
    let sum = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == letter[0]){
            sum ++;
      }
    }
    return sum;
}
// Test.assertEquals(strCount('Hello', 'o'), 1);
// Test.assertEquals(strCount('Hello', 'l'), 2);
// Test.assertEquals(strCount('', 'z'), 0);
