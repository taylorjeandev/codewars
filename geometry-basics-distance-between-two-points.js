// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

function distanceBetweenPoints(a, b) {
    let result = result.toFixed(6)
    if (a >= b){
        result = a - b
    }else{
        result = b - a
    }
    
}

// Test.assertApproxEquals(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
// Test.assertApproxEquals(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
// Test.assertApproxEquals(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);