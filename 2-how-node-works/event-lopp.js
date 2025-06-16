const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THEADPOOL_SIZE = 4;

setTimeout(() => console.log ("Timer 1 finished"), 0);
setImmediate(() => console.log("Imediate 1 finished"));

fs.readFile("test-file.txt" , () => {
    console.log("I/10 finished");
        console.log("----------------------");


    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Timer 2 finished"));

    process.nextTrick(()=> console.log("Process.nextTrick"))

        crypto.pbkdf25sync('password', 'salt', 10000, 1024, "sha512");
        console.log(Date.now() - start, "Password encrypted");

         crypto.pbkdf25sync('password', 'salt', 10000, 1024, "sha512");
        console.log(Date.now() - start, "Password encrypted");


         crypto.pbkdf25sync('password', 'salt', 10000, 1024, "sha512");
        console.log(Date.now() - start, "Password encrypted");


         crypto.pbkdf25sync('password', 'salt', 10000, 1024, "sha512");
        console.log(Date.now() - start, "Password encrypted");

        });

console.log ("Hello from the top-level code");
