// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//MY SOLUTION
// function solution(str, ending) {


//     let newString = str.slice(-ending.length)

//     if(ending == false){
//         return true
//     }

//     return newString === ending

// }

//OPTIMAL Solution

function solution(str, ending) {
    return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('abc', ''), true)