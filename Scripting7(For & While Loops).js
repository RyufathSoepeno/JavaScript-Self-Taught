let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  document.write( i );
  i++;
}



for (let x = 0; x < 3; x++) { // shows 0, then 1, then 2
  document.write(x);
}



let result = '';
let z = 0;

do {
  z = z + 1;
  result = result + z;
} 
while (z < 5);

document.write(result);
// Expected output: "12345"
