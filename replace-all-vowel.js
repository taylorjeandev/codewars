// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
   return s.replace(/[aeiou]/gi, "!")
    
    
}

// Test.assertSimilar(replace("Hi!") , "H!!")
// Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
// Test.assertSimilar(replace("aeiou") , "!!!!!")
// Test.assertSimilar(replace("ABCDE") , "!BCD!")
