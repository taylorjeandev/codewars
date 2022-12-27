// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

function past(h, m, s) {
  const totalSeconds = h * 3600000 + m * 60000 + s * 1000;
  return totalSeconds;
}

console.log(past(3, 10, 45));