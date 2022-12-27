// Task
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

// function padIt(str, n) {
//   str = str.split("");

//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       str.unshift("*");
//     } else if (i % 2 === 1) {
//       str.push("*");
//     }
//   }
//   return str.join("");
// }

function padIt(str, n) {
  str = str.split("");
  let i = 0;

  do {
    i += 1;
    i % 2 === 0 ? str.push("*") : str.unshift("*");
  } while (i < n);

  return str.join("");
}

console.log(padIt("a", 1), "*a");
console.log(padIt("a", 2), "*a*");
console.log(padIt("a", 3), "**a*");
console.log(padIt("a", 4), "**a**");
console.log(padIt("a", 5), "***a**");
