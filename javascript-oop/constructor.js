/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

/* A constructor is a function that gets called with `new`.
 * The constructor can also reference the object being created with the `this` keyword.
 */
function Product(name, upc) {
  /* create properties by referring to the current object with the
   * `this` keyword and just referencing the new properties by name.
   */
  this.name = name;
  this.upc = upc;
}

// creating an instance of Product with the `new` operator.
var product = new Product("bananas", "4011");

console.log("The product's name is " + product.name);
