function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();




function showMessage2() {
  let message = "Hello, I'm JavaScript!"; // local variable

  document.write( message );
}

showMessage2(); // Hello, I'm JavaScript!

/** -> alert( message ); // <-- Error! The variable is local to the function */



let userName = 'John';

function showMessage3() {
  let message2 = 'Hello, ' + userName;
  document.write(message2);
}

showMessage3(); // Hello, John




/** The function has full access to the outer variable. It can modify it as well. */
let userName2 = 'John';

function showMessage4() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message3 = 'Hello, ' + userName;
  document.write(message3);
}

document.write( userName2 ); // John before the function call

showMessage();

document.write( userName2 ); // Bob, the value was modified by the function