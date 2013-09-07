/*
 * Copyright 2013 Tom Aratyn <tom@aratyn.name>
 */

var anArray = [],
    anObject = {},
    aString = "", 
    aNumber = 0;

console.log("anArray, which is empty, is NOT equal to true: " + (anArray == true));

if (anArray) {
  console.log("but anArray evaluated to true in the condition of an if statement");
}
else {
  console.log("if you see this message, the demo has been modified.");
}

console.log("anObject, which is also empty, is also not equal to true: " + (anObject == true));

if (anObject) {
  console.log("but anObject evaluated to true in the condition of an if statement");
}
else {
  console.log("if you see this message, the demo has been modified.");
}

console.log("aString, which is also empty, is also not equal to true: " + (aString == true));

if (aString) {
  console.log("if you see this message, the demo has been modified.");
}
else {
  console.log("but aString, which is empty, evaluated to false in the condition of an if statement");
}

console.log("aNumber, zero, is also not equal to true: " + (aNumber == true));

if (aNumber) {
  console.log("if you see this message, the demo has been modified.");
}
else {
  console.log("but aNumber, which is zero, evaluated to false in the condition of an if statement");
}

/* Let's see how it's different if these objects have values */

anArray = [1, 2, 3];

console.log("anArray, which contains numbers, is not equal to true: " + (anArray == true));

if (anArray) {
  console.log("but anArray evaluated to true in the condition of an if statement");
}
else {
  console.log("if you see this message, the demo has been modified.");
}

anObject = {a: 1};

console.log("anObject, which is not empty, is also not equal to true: " + (anObject == true));

if (anObject) {
  console.log("but anObject evaluated to true in the condition of an if statement");
}
else {
  console.log("if you see this message, the demo has been modified.");
}

aString = "And on earth let there be peace to all people of good will.";

console.log("aString, which is not empty, is also not equal to true: " + (aString == true));

if (aString) {
  console.log("but aString, which is not empty, evaluated to false in the condition of an if statement");
}
else {
  console.log("if you see this message, the demo has been modified.");

}

aNumber = 5;

console.log("aNumber, five, is also not equal to true: " + (aNumber == true));

if (aNumber) {
  console.log("but aNumber, which is not zero, evaluated to true in the condition of an if statement");
}
else {
  console.log("if you see this message, the demo has been modified.");
}


/* What conclusion do we draw?
 * 
 * "falsey" and "truthy" are not purely about being equal (==)  to true or false. 
 *
 * Most things will be truthy except:
 * 
 * undefined, null, NaN, 0, "" (empty string), and false. 
 */ 
