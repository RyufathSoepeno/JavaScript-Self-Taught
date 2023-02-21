function showMessage(from, text) { // parameters: from, text
  document.write(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)




function showMessage2(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  document.write( from + ': ' + text );
}

var from = "Ann";

showMessage2(from, "Hello"); // Result --> *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
document.write( from ); // Ann




//Defaul Values
function showMessage3(from, text = "no text given") {
  document.write( from + ": " + text );
}

showMessage3("Ann"); // Ann: no text given





function showMessage4(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  document.write(text);
}

showMessage4(); // Result --> empty message