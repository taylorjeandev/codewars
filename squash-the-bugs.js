// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str){
  
    let spl = str.split(" ");
    let longest = 0
    
    for (let i = 0; i < spl.length; i++){
      if (spl[i].length > longest){
        longest = spl[i].length
      }
    }
    return longest
}
//   assert.strictEqual(findLongest("The quick white fox jumped around the massive dog"), 7);
//   assert.strictEqual(findLongest("Take me to tinseltown with you"), 10); 
//   assert.strictEqual(findLongest("Sausage chops"), 7); 
//   assert.strictEqual(findLongest("Wind your body and wiggle your belly"), 6); 
//   assert.strictEqual(findLongest("Lets all go on holiday"), 7); 