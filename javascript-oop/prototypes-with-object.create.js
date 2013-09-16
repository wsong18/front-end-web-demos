/* This file is based on the code found at
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#Inheriting_properties
 * retrieved 2013-09-16.
 * Created by Mozilla Contributors and licensed CC-BY-SA.
 */

/* Remember that when trying to find a prototype name, JavaScript first
 * checks the object you called then check's that object's prototype chain for
 * objects that might have that property. If it can't find it will return undefined.
 *
 * In this demo we'll create increasingly longer prototype chains with
 * `Object.create()`.
 */

var a = {
  a: 1,
  foo: function() {
    console.log("foo")
  }
};
// a ---> Object.prototype ---> null

/* Object.create() lets us create a new object and set that object's prototype
 * to be `a`.
 */
var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log("before setting b.a, b.a resolves to " + b.a); // 1 (inherited)
b.b = 2;
b.a = "Peter";
a.a = "Paul";
/* Make sure you understand why b.a is Peter not Paul. */
console.log("After setting b.a, b.a resolbes to " + b.a);

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log("c.b === " + c.b);
/* make sure you understand why c.foo() works */
c.foo();
console.log("c.a === " + c.a);

/* finally, make sure you understand how d.a avoided being "Peter" */
var d = Object.create(a);
console.log("d.a ===" + d.a);