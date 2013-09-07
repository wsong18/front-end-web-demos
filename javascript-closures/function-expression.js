/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

var function_expression;

/* This is a function expression (often called an anonymous function, or
 * a function literal (incorrect but common) ).
 */
function_expression = function (name) {
  console.log("Hello " + name);
};

/* this is a function declaration (often called a named function)
 */
function function_declaration (name) {
  console.log("Howdy " + name + "!");
}

// notice they both work the same.
function_expression("Francis");
function_declaration("Francis");

console.log("Both have the same type: " + typeof function_declaration + " " + typeof function_expression);
