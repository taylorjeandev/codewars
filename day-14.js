function countVowelConsonant(str) {
  return [...str].reduce((acc, c) => (acc += c.match(/[aeiou]/i) ? 1 : 2), 0);
}
console.log(countVowelConsonant("aeiou bcdfghjklmnpqrstvwxz"));

/**
 * Test Suite
 */
// describe("countVowelConsonant()", () => {
//   it("returns total of vowels(1) and consonants(2) to be added", () => {
//     // arrange
//     const value = "abcde";

//     // act
//     const result = countVowelConsonant(value);

//     // log
//     // console.log("result: ", result);

//     // assert
//     expect(result).toBe(8);
//   });
// });
