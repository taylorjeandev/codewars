// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let string = str.toLowerCase();
    let numberOfX = 0
    let numberOfO = 0
    for (let i = 0; i <= string.length; i++) {
      if (string[i] == 'x') {
        numberOfX++
      } else if (string[i] == 'o') {
        numberOfO++
      }
    }
    return numberOfX === numberOfO
  }
  
  console.log(XO('xo'), true);
  console.log(XO("xxOo"), true);
  console.log(XO("xxxm"), false);
  console.log(XO("Oo"), false);
  console.log(XO("ooom"), false);