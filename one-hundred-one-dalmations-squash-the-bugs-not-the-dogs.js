// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!

function howManyDalmatians(number){
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    let response = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number <= 100 ? dogs[2] : dogs[3]

    return response;
}
    // if (number <= 10){
    //     return dogs[0]
    // }else if( number <= 50){
    //     return dogs[1]
    // }else if(number <= 100){
    //     return dogs[2]
    // }else{
    //     return dogs[3]
    // }
    
//   assert.strictEqual(howManyDalmatians(26), "More than a handful!");
//   assert.strictEqual(howManyDalmatians(8), "Hardly any");
//   assert.strictEqual(howManyDalmatians(14), "More than a handful!");
//   assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
//   assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
//   assert.strictEqual(howManyDalmatians(101), "101 DALMATIANS!!!");