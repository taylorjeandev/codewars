// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let splitString = s.split(" ");
    let shortestWord = 50000

    splitString.map((word) => word.length < shortestWord ? shortestWord = word.length : null)
    return shortestWord;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);