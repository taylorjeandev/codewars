// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet2 (name, owner) {
    return name === owner ? 'Hello boss' : "Hello guest';"
}


function greet (name, owner) {
    if (name === owner){
        return 'Hello boss'
    }else{
        return 'Hello'
    }
}


// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')