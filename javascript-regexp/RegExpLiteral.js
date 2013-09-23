/* Copyright Tom Aratyn <tom@aratyn.name> */

var hexNumberMatch = /^[a-f0-9]{6}$/,
  white = "ffffff",
  invalidColor = "ff0gaa";

console.log('does white match as a hex number? ' + hexNumberMatch.test(white));
console.log('does invalidColor match as a hex number? ' + hexNumberMatch.test(invalidColor));