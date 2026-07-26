class Animal {
    // Private field (only accessible inside the class)
    #name;
  
    constructor(name, sound) {
      this.#name = name;          // Private
      this.sound = sound;         // Public
    }
  
    // Public method
    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }
  
    // Getter for name (read-only access)
    getName() {
      console.log(this.#name);  
      return this.#name;
    }
  
    // Setter for name (controlled access)
    setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this.#name = newName;
      } else {
        console.log('Invalid name!');
      }
    }
}

class Mammal extends Animal {

    constructor(name, sound, type) {
        super(name, sound);
        this.type = type;
    }

    breathe() {
        console.log(`${this.name}  and ${this.type} is breathing... 🫁`);
    }


}


class Human extends Mammal {
    constructor(name, sound, type) {
        super( name, sound, type);
    }
    // Polymorphism 
    speak() {
        super.speak();
        console.log("This is how human speaks");
    }

    xyz() {
        this.speak();
    }
}


const cat = new Mammal("ABC", "Meow", "Domestic");

cat.getName();

console.log(cat.sound);