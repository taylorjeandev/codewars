// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s) {
    let arr = s.split(" ");
    arr.sort((a, b) => a.length - b.length);
    return arr[0].length
  
  }
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"), "3")