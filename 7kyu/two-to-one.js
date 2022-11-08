// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//   Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {

    const fullString = s1 + s2;
    const arr = fullString.toLowerCase().split("")
    const uniqueChars = new Set(arr)
    return [...uniqueChars].sort().join("")
  
  }
  
  function longest(s1, s2) {
    let uniq = ""
    const str = s1 + s2;
    for (let i = 0; i < str.length; i++) {
      if (uniq.includes(str[i]) === false) {
        uniq += str[i]
      }
    }
    return uniq.split("").sort().join("")
  }
  
  const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("")
  
  console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
  console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")