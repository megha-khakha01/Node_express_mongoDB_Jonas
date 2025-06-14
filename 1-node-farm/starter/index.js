const fs = required('fs');

// Blocking , synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}.\ncreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written successfully!');
 

//Non - blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile('./txt/${data1}.txt', 'utf-8', (err,data2) => {
        console.log(data2);
        fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
            console.log(data);
        });
    });
});
console.log('Will read file ! );
