// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

function Dog (breed, bark) {
        this.breed = breed;
        this.bark = function() {return 'Woof'};
}

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");


// Test.expect(snoopy.bark() === "Woof")
// Test.expect(scoobydoo.bark() === "Woof")