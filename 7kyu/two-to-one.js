// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    s1 = s1.split("").sort();
    s2 = s2.split("").sort();

    let unique1 = [...new Set(s1)].join("");
    let unique2 = [...new Set(s2)].join("");

    if (unique1.length > unique2.length) {
        return unique1;
    } else {
        return unique2
    }
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")