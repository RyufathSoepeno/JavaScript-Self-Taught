/** 
Prompt:
variable = prompt(title, [default]);
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

Title: The text to show the visitor.
Default: An optional second parameter, the initial value for the input field.
*/


let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // If you use alert, use ${variable_names} to print out variable in a string

/** 
result = confirm(question);
The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise.
*/

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed