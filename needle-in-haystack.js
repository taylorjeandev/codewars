// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    for(let i = 0; i <= haystack.length; i++){
        if(haystack[i] === 'needle')
        return `found the needle at position ${[i]}`
    }
}

function findNeedle(haystack){
    haystack.filter((i => 'needle') `found the needle at position ${i}`)
}

function findNeedle(haystack){
    return `found the needle at position ${haystack.indexOf('needle')}`
}

// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')