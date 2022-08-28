// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
// let alphabet: {
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 0,
//     e: 0,
//     f: 0,
//     h: 0,
//     g: 0,
//     j: 0,
//     k: 0,
//     l: 0,
//     m: 0,
//     n: 0,
//     o: 0,
//     p: 0,
//     q: 0,
//     r: 0,
//     s: 0,
//     t: 0,
//     u: 0,
//     v: 0,
//     w: 0,
//     x: 0,
//     y: 0,
//     z: 0
// }

function charFreq(message) {
    let arr = message.split('')
    let item = {}
    for (let i = 0; i < arr.length; i++) {
      if (!item[arr[i]]) {
        item[arr[i]] = 1
      } else item[arr[i]]++
    }
    return item
  
}

// Test.assertDeepEquals(charFreq("I like cats"), {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1});