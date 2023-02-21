function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
document.write( result ); // 3




function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?'); // The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  document.write( 'Access granted' );
} else {
  document.write( 'Access denied' );
}




// It is possible to use return without a value. That causes the function to exit immediately.

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  document.write( "Showing you the movie" ); // (*)
  // ...
}





function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    document.write( i ); // a prime
  }