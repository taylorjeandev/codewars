// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  A = A.filter((x) => x > 0).sort();
  A = [...new Set(A)];

  if (A[0] !== 1) {
    return 1;
  }

  let current = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === current) {
      current++;
    } else {
      return current;
    }
  }

  return A[A.length - 1] + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]), "5");
console.log(solution([1, 2, 3]), "4");
console.log(solution([-1, -3]), "1");
