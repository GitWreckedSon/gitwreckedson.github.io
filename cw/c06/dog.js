/*

Work with a partner to create a Dog constructor, which creates instances containing the following properties:

* name (string)
* species (string)
* foodsEaten (array)

And the following methods:

* eatSomething(food): takes the 'food' argument (passed as a string) and pushes it into the 'foodsEaten' array
* introduce: console.logs a string introducing itself, including its name, species, and what it has eaten.

Create 3 dogs total. Make sure all 3 dogs have all properties set and methods defined.

Exercise your dogs by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var Dog = function(name, species) {
	this.name = name;
	this.species = species;
	this.foodsEaten = []
	this.eatSomething = function(food) {
		this.foodsEaten.push(food);
	}
	this.introduce = function() {
		console.log("my name is " + this.name + " i am a " + this.species + " and i ate these foods: " + this.foodsEaten)
	}
}

var dog1 = new Dog('chucky', 'poodle')
var dog2 = new Dog('bart', 'black lab')
var dog3 = new Dog('fido', 'schnauzer')

dog1.eatSomething('peaches, ')
dog1.eatSomething('ravioli, ')


//print something, dude
dog1.introduce();
dog1.name = 'billybob'
dog1.introduce();
