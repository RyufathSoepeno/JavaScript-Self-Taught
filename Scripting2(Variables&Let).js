/** Variables are containers for storing data (storing data values) || IT CAN STORE ANY DATA TYPE */
var x = 5;

var y;
y = 6.5;

var code = "Delta";

var z = x + y;

document.write("<h3>" + code + " is " + x + " + " + y + "= " + z + "<br>");

var name = "John";

// embed a variable
document.write( `Hello, ${name}! <br>` ); // Hello, John!
// OR
document.write( 'Hello, ' + name + '! <br>');

// embed an expression
document.write( `the result is ${1 + 2} <br>` ); // the result is 3

/** Boolean */
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
document.write( isGreater ); // true (the comparison result is "yes")



/** 'let' are variables annot be Redeclared with block scope */

let p = 4;

document.write("She is " + p);


/* let p = "John Doe";

let p = 0;

// SyntaxError: 'x' has already been declared */



/** const are variables Redeclared nor reassigned, but properties could change like objects in class, etc. */

/* const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error 
*/
