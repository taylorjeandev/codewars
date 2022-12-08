// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  str = str.split(" ");
  str = str.map((word) => word.split("").reverse().join(" "));
  return str.join(" ");
}
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(
//       reverseWords("The quick brown fox jumps over the lazy dog."),
//       "ehT kciuq nworb xof spmuj revo eht yzal .god"
//     );
//     assert.strictEqual(reverseWords("apple"), "elppa");
//     assert.strictEqual(reverseWords("a b c d"), "a b c d");
//     assert.strictEqual(
//       reverseWords("double  spaced  words"),
//       "elbuod  decaps  sdrow"
//     );
//   });
// });
