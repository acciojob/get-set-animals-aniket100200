// Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat subclass
class Cat extends Animal {
    // Method specific to Cat
    purr() {
        console.log("purr");
    }

    // Overriding makeSound method
    makeSound() {
        this.purr();
    }
}

// Dog subclass
class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }

    // Overriding makeSound method
    makeSound() {
        this.bark();
    }
}

// Assigning classes to window object
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
