// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal (string) {
    //declare variables
    let total = 0;

    //loop through array
    for(let i = 0; i < string.length; i++){
        total += string.charCodeAt(i)
    }
    return total;
}

// it("sample tests", () => {
//     doTest("", 0);
//     doTest("a", 97);
//     doTest("b", 98);
//     doTest("c", 99);
//     doTest("d", 100);
//     doTest("e", 101);
//     doTest("aaa", 291);
//     doTest("Mary Had A Little Lamb", 1873);
//   });