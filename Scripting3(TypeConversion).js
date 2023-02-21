let value = true;
document.write(typeof value + "<br>"); // boolean

value = String(value); // now value is a string "true"
document.write(typeof value + "<br>"); // string

document.write( "6" / "2 <br>" ); // 3, strings are converted to numbers

let str = "123";
document.write(typeof str + "<br>"); // string

let num = Number(str); // becomes a number 123

document.write(typeof num + "<br>"); // number
