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
        console.log("The animal makes a sound");
    }
}

// Cat subclass
class Cat extends Animal {
    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Dog subclass
class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Assigning classes to window object
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
