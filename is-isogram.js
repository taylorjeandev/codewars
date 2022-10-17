// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
    for (var i = 0; i <= str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        if (str.toUpperCase()[j] == str.toUpperCase()[i]) {
          return false;
        }
      }
    }
    return true;
  }
  
  console.log(isIsogram("Dermatoglyphics"), true);
  console.log(isIsogram("isogram"), true);
  console.log(isIsogram("aba"), false);
  console.log(isIsogram("moOse"), false);
  console.log(isIsogram("isIsogram"), false);
  console.log(isIsogram(""), true);