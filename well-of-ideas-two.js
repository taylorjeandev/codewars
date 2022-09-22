// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){

    let goodIdeas = 0;

    for(let i = 0; i <= x.length; i++){
        if(x[i] == 'good'){
            goodIdeas += 1
        }
    }

    if(goodIdeas == 0){
        return 'Fail!'
    }
    
    if(goodIdeas < 3){
        return 'Publish!'
    }
    
    if(goodIdeas > 2){
        return'I smell a series!'
    }
}

// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');