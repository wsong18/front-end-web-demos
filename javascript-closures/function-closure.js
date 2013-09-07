/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

var hello_world_function,
  old_time_announcer1,
  wait_threshold,
  old_time_announcer2,
  greet_franics_function,
  greet_john_paul_function;

function say_hello_world() {
  console.log("hello world!")
}

say_hello_world();

/* This will return a function that says hello world.
 * But does NOT say hello world ITSELF.
 * It may help to think of this as the "outer function".
 */
function get_hello_world_function() {

  /* This is sometimes called the inner function.
   * This is the function that says hello world.
   */
  return function () {
    console.log("hello world");
  };
}
// now we get the function that says hello world.
hello_world_function = get_hello_world_function();
hello_world_function();
// and we execute it! The inner function says hello world.

/* This function will return a function that will post a time stamp.
 * The timestamp will stay the same each time the inner function is called.
 */
function get_old_time_announcer() {
  var current_time = Date.now();

  /* Each time this function is called it will show the same value of current_time.
   */
  return function () {
    console.log("The time when this function was called (unix time) " +
      current_time);
  }
}

// get the first announcer.
old_time_announcer1 = get_old_time_announcer();
// announce the first time.
old_time_announcer1();

wait_threshold = Date.now();
while (wait_threshold + 50 < Date.now);

// get another announcer.
old_time_announcer2 = get_old_time_announcer();
// announce the second time.
old_time_announcer2();

// just for fun, announce it again.
old_time_announcer1();

/* This function will return a function that greets you by name.
 */
function get_greeting_function(name) {

  /* This function will greet a person based on the name provided to the outer function
   */
  return function () {
    console.log("Hello " + name);
  };
}

// get a function that says hello to Francis
greet_franics_function = get_greeting_function("Francis");
greet_franics_function();

// get a function that says hello to John Paul
greet_john_paul_function = get_greeting_function("John Paul");
greet_john_paul_function();

