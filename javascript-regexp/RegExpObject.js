/* Copyright Tom Aratyn <tom@aratyn.name> */

var hexNumberMatch = new RegExp("^[a-f0-9]{6}|[a-f0-9]{3}$"),
  red = "f00",
  white = "ffffff",
  invalidColor = "ff0gaa";

console.log('does red match as a hex number? ' + hexNumberMatch.test(red));
console.log('does white match as a hex number? ' + hexNumberMatch.test(white));
console.log('does invalidColor match as a hex number? ' + hexNumberMatch.test(invalidColor));