// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
  return array.reduce((acc, c) => acc + c, 0) % 2 === 0 ? "even" : "odd";
}

// describe("Fixed tests", () => {
//   it("Edge tests", () => {
//     assert.strictEqual(oddOrEven([0]), "even");
//     assert.strictEqual(oddOrEven([1]), "odd");
//     assert.strictEqual(oddOrEven([]), "even");
//   });

//   it("Even tests", () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), "even");
//     assert.strictEqual(oddOrEven([0, 1, 3]), "even");
//     assert.strictEqual(oddOrEven([1023, 1, 2]), "even");
//   });

//   it("Negative Even tests", () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), "even");
//     assert.strictEqual(oddOrEven([0, -1, -3]), "even");
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), "even");
//   });

//   it("Odd tests", () => {
//     assert.strictEqual(oddOrEven([0, 1, 2]), "odd");
//     assert.strictEqual(oddOrEven([0, 1, 4]), "odd");
//     assert.strictEqual(oddOrEven([1023, 1, 3]), "odd");
//   });

//   it("Negative Odd tests", () => {
//     assert.strictEqual(oddOrEven([0, -1, 2]), "odd");
//     assert.strictEqual(oddOrEven([0, 1, -4]), "odd");
//     assert.strictEqual(oddOrEven([-1023, -1, 3]), "odd");
//   });
// });
