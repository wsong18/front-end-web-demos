/* Copyright 2013 Tom Aratyn <tom@aratyn.name> */

var emailRegExp = new RegExp("([a-z][a-z0-9]*)@([a-z][a-z0-9.]*[a-z0-9])", "i"),
  tom_email = "tom@aratyn.name",
  student_email = "student@senecacollege.ca",
  root_localhost = "root@localhost",
  tom_email_parts,
  student_email_parts,
  root_localhost_parts;

tom_email_parts = emailRegExp.exec(tom_email);
console.log(tom_email_parts.length);
console.log("full matching expression: " + tom_email_parts[0]);
console.log("first parenthesis matched: " + tom_email_parts[1]);
console.log("second parenthesis matched:  " + tom_email_parts[2]);

student_email_parts = emailRegExp.exec(student_email);
console.log(student_email_parts.length);
console.log("full matching expression: " + student_email_parts[0]);
console.log("first parenthesis matched: " + student_email_parts[1]);
console.log("second parenthesis matched:  " + student_email_parts[2]);

root_localhost_parts = emailRegExp.exec(root_localhost);
console.log(root_localhost_parts.length);
console.log("full matching expression: " + root_localhost_parts[0]);
console.log("first parenthesis matched: " + root_localhost_parts[1]);
console.log("second parenthesis matched:  " + root_localhost_parts[2]);
