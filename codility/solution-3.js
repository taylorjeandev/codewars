// Solution 3

// A word machine is a system that performs a sequence of simple operations on a stack of integers. Initially the stack is empty. The sequence of operations is given as a string. Operations are separated by single spaces. The following operations may be specified:

// An integer X (from 0 to 2 to the power of 20 - 1): the machine pushes X onto the stack;

// “POP”: the machine removes the topmost number from the stack;

// “DUP”: the machine pushes a duplicate of the topmost number onto the stack;

// “+”: the machine pops the two topmost elements from the stack, adds them together and pushes the sum onto the stack;

// “-“: the machine pops the two topmost elements from the stack, subtracts the second one from the first (topmost) one and pushes the difference onto the stack.

// After processing all the operations, the machine returns the topmost value from the stack.

// The machine processes 20-bit unsigned integers (numbers from 0-2(20) - 1). AN overflow in addition or underflow in subtraction causes an error. The machine also reports an error when it tries to perform an operation that expects more numbers on the stack than the stack actually contains. Also, if, after performing all the operations, the stack is empty, the machine reports an error.

// For example, given a string “44 5 6 - 7 +”, the machine performs the following operations:

// Finally the machine will return 8.

// Given a string “13 DUP 4 POP 5 DUP + DUP + -“, the machine performs the following operations:

// Finally the machine will return 7.

// Given a string “5 6 + -“, the machine reports an error. After the addition, there is only one number on the stack and the subtraction operation expects two.

// Given a string “3 DUP 5 - -“, the machine reports an error. The second subtraction yields a negative result.

// Write a function:

// function solution(s);

// That given a string S containing a sequence of operations for the word machine, returns the result the machine would return after processing the operations. The function should return -1 if the machine would report an error while processing the operations.

// Examples:

// Given S = “4 5 6 - 7 +”, the function should return 8, as explained above.
// Given S = “13 DUP 4 POP 5 DUP + DUP + -“ the function should return 7.
// Given S= “5 6 + -“, the function should return -1.
// Given S = “3 DUP 5 - -“, the function should return -1.
// Given S = “1048575 DUP +”, the function should return -1.

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let stack = [];
  let s = S.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "POP") {
      if (stack.length === 0) {
        return -1;
      }
      stack.pop();
    } else if (s[i] === "DUP") {
      if (stack.length === 0) {
        return -1;
      }
      stack.push(stack[stack.length - 1]);
    } else if (s[i] === "+") {
      if (stack.length < 2) {
        return -1;
      }
      let a = stack.pop();
      let b = stack.pop();
      if (a + b > 1048575) {
        return -1;
      }
      stack.push(a + b);
    } else if (s[i] === "-") {
      if (stack.length < 2) {
        return -1;
      }
      let a = stack.pop();
      let b = stack.pop();
      if (a - b < 0) {
        return -1;
      }
      stack.push(a - b);
    } else {
      stack.push(parseInt(s[i]));
    }
  }
  if (stack.length === 0) {
    return -1;
  }
  return stack[stack.length - 1];
}
