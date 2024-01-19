//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get getSpecies(){
		return this.species;
	}

	makeSound(sound){
		console.log(sound);
	}
}

class Dog extends Animal 
{
	constructor(species)
	{
			super(species);
	}
	bark(){
			super.makeSound("woof");
	}
}

class Cat extends Animal 
{
	constructor(species)
	{
			super(species);
	}

	purr()
	{
		super.makeSound("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
