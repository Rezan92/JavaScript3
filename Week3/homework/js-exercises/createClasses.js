/* 
Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. 
As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. 
Usually the horse eats grass or helps transport materials for Abdulkareem.

And they lived happily ever after!
*/
class Entity {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Person extends Entity {
  constructor(name, age, city, profession, married, numberOfChildren, likes) {
    super(name, age);
    this.city = city;
    this.profession = profession;
    this.married = married;
    this.numberOfChildren = numberOfChildren;
    this.likes = likes;
    this.animals = [];
  };

  addAnimal(obj) {
    this.animals[this.animals.length] = obj;
  };
};

class Animal extends Entity {
  constructor(name, age, color, purpose) {
    super(name, age);
    this.color = color;
    this.purpose = purpose;
  };
};

const abdulkareem = new Person("Abdulkareem", 29, "Riyadh", "construction worker", true, 3, ["eat dates", "smoke water pipe"]);
const adel = new Animal("Adel", 15, "brown", ["eats grass", "help transport materials"]);

abdulkareem.addAnimal(adel);

console.log(abdulkareem.animals);
console.log(adel);