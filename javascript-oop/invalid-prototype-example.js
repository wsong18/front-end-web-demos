/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

/* A counter example demonstrating how the `.prototype` is not the acutal prototype
 * chain itself. Rather it's used by the `new` operator.
 */
function Foo() {
}
Foo.prototype = { a: 3};
/* notice that this does work */
console.log(Foo.a);

var foo = new Foo();
/* the new operator sets the `[[prototype]]` from the `prototype` property. */
console.log(foo.a);
