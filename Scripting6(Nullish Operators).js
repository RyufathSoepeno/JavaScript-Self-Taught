/**
The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
*/

let user;

document.write(user ?? "Anonymous"); // Anonymous (user is undefined)



let user2 = "John";

document.write(user2 ?? "Anonymous"); // John (user is not null/undefined)



let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
document.write(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder because nickname is not null



