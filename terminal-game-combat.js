// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    if(health <= damage){
        health = 0
    }else{
 return health -= damage
    }
}

const combat = (health, damage) => health <= damage ? health = 0 : health-= damage;

// Test.assertEquals(combat(100, 5), 95);
// Test.assertEquals(combat(92, 8), 84);
// Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
