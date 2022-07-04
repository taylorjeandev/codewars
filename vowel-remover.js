// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
}

const shortcut = str => str.replace(/[aeiou]/gi, '');


// doTest('hello', 'hll');
// doTest('how are you today?', 'hw r y tdy?');
// doTest('complain', 'cmpln');
// doTest('never', 'nvr');

  