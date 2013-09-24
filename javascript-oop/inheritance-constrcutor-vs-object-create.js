var dog, cat, animal;

/* all animals can speak */
animal = {
  speak: function () {
    console.log("I spoke");
  }
}

/* Object.create creates a new object and sets the new object's prototype
 * chain "[[prototype]]" to start with animal.
 * Which is why both cat and dog have all the behaviour of animal.
 */

dog = Object.create(animal);
cat = Object.create(animal);

/* so they can both speak */
dog.speak();
cat.speak();

/* now let's do the same thing but with constructors */


function Dog() {
}
/* all Dogs will be animals because the constructor has a property called
 * prototype.
 * Note that the property called "prototype" is not the prototype chain ([[prototype]]).
 * The property called "prototype" is used by the new operator to set the
 * prototype chain [[prototype]] when creating a new object.
 * the property means: when creating a new Dog make sure to set the prototype chain ([[prototype]]) to animal.
 */
Dog.prototype = animal;
dog = new Dog();

function Cat() {
}
/* all Cogs will be animals because the constructor has a property called
 * prototype.
 * Note that the property called "prototype" is not the prototype chain ([[prototype]]).
 * The property called "prototype" is used by the new operator to set the
 * prototype chain [[prototype]] when creating a new object.
 * the property means: when creating a new Cat make sure to set the prototype chain ([[prototype]]) to animal.
 */
Cat.prototype = animal;
cat = new Cat();

/* and so both dog and cat have animal in their prototype chain ([[prototype]])
 * and therefore have all of animal's behaviour (they can speak).
 */
dog.speak();
cat.speak();

/* let's just confirm that .prototype and [[prototype]] are two different things.
 * what if we add prototype property to cat. Will it now have all of dog's properties and behaviours?
 */
dog.bark = "worse than my bite";
cat.prototype = dog;
console.log(cat.bark);
/* no it doesn't. cat.bark === undefined */
cat.speak();
/* but cat can still speak because the prototype property is different from the prototype chain ([[prototype]])