/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

/* A constructor is a function that gets called with `new`.
 * The constructor can also reference the object being created with the `this` keyword.
 */
function Product(name, price) {

  /* create properties by referring to the current object with the
   * `this` keyword and just referencing the new properties by name.
   */
  this.name = name;
  this.price = price;
}


/* Here we're connecting an object literal with our constructor.
 */
Product.prototype = {
  "apply_tax": function () {
    return this.price  * 1.13;
  },
  "calculate_total": function (quantity) {
      if (quantity === undefined) {
          var quantity = 1;
      }
      return this.apply_tax() * quantity;
  }
};

// creating an instance of Product with the `new` operator.
var product = new Product("bananas", 1.99);

console.log("The product's name is " + product.name);

console.log("Three bananas cost this much: " + product.calculate_total(3));

