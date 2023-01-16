function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return null;
  }

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2;
}

console.log(isAnagram("cinema", "iceman"), true);
console.log(isAnagram("brush", "shrub"), true);
