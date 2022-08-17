// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

function rainAmount(mm){
    if (mm >= 40) {
         return "Your plant has had more than enough water for today!"
    }else{
        return `You need to give your plant ${40 - mm}mm of water`
    }    
}

const rainAmount = mm => mm >= 40 ? "Your plant has had more than enough water for today!" : `You need to give your plant ${40 - mm}mm of water`

// Test.assertEquals(rainAmount(100), "Your plant has had more than enough water for today!")
// Test.assertEquals(rainAmount(39), "You need to give your plant 1mm of water")