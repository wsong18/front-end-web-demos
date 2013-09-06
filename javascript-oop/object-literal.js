/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

var obj_from_literal, obj_from_obj_ctor;

/* an object literal uses the `{}` sytnax.
 * This is the preferred syntax.
 */
obj_from_literal = {
  "name": "Francis",
  "date": new Date("2013-03-13")
};

obj_from_literal.dynamically_added_proerty = "some new value";

/* properties can be accessed using either dot syntax or array syntax. It's the same thing.
 */
console.log("my name is " + obj_from_literal.name);
console.log("my name is " + obj_from_literal["name"]);

/* Sometimes you might see the Object from the Object constructor.
 * This should be rewritten using the object literal syntax to be simpler.
 */
obj_from_obj_ctor = new Object();
obj_from_obj_ctor.name = "Francis";
obj_from_obj_ctor.date = new Date("2013-03-13");

console.log("my name is " + obj_from_obj_ctor.name);
console.log("my name is " + obj_from_obj_ctor["name"]);
