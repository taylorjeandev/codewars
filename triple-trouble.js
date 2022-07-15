// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
    let result = ""
    for(let i = 0; i < one.length; i++){
        result += one.charAt(i) + two.charAt(i) + three.charAt(i)
    }
    return result;
}

// assert.strictEqual(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
// assert.strictEqual(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
// assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
// assert.strictEqual(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
// assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans"); 