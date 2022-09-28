// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
}

// Test.assertEquals(duckDuckGoose(players, 1),  "a");
// Test.assertEquals(duckDuckGoose(players, 3),  "c");
// Test.assertEquals(duckDuckGoose(players, 10), "z");
// Test.assertEquals(duckDuckGoose(players, 20), "z");
// Test.assertEquals(duckDuckGoose(players, 30), "z");
// Test.assertEquals(duckDuckGoose(players, 18), "g");
// Test.assertEquals(duckDuckGoose(players, 28), "g");
// Test.assertEquals(duckDuckGoose(players, 12), "b");
// Test.assertEquals(duckDuckGoose(players, 2),  "b");
// Test.assertEquals(duckDuckGoose(players, 7),  "f");