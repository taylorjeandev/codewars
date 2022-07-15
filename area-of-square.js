// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area*100)/100
  }

// Test.assertEquals(squareArea(2), 1.62);
// });

// describe("squareArea(0)", function() {
//   Test.assertEquals(squareArea(0), 0);
// });

// describe("squareArea(14.05)", function() {
//   Test.assertEquals(squareArea(14.05), 80);