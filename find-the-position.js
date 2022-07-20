// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
// Test.assertEquals(position("a"),"Position of alphabet: 1");
// Test.assertEquals(position("z"),"Position of alphabet: 26");
// Test.assertEquals(position("e"),"Position of alphabet: 5");