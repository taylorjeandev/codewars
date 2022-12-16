function insertDashes(arr) {
  arr = arr.split(" ");

  return arr
    .map((arr) => arr.split("").join("-") + " ")
    .join("")
    .trim();
}

console.log(insertDashes("aba caba"));

// describe("insertDashes()", () => {
//   it("insert dashes in between chars", () => {
//     // arrange
//     const value = "aba caba";

//     // act
//     const result = insertDashes(value);

//     // log
//     console.log("result: ", result);

//     // assert
//     expect(result).toBe("a-b-a c-a-b-a");
//   });
// });
