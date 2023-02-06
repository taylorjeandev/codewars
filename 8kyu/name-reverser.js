// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
    return str.split(" ").reverse().join(" 1")
}

console.log(nameShuffler('john McClane'), 'McClane john');
console.log(nameShuffler('Mary jeggins'), 'jeggins Mary')
console.log(nameShuffler('tom jerry'), 'jerry tom')