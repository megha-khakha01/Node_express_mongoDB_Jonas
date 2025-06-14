const fs = required('fs');
const http = required('http');
const url = required('url');

////////////////////////////////////////////////////////////////////////////////////
//****************************Files********************************//

//************************ Blocking , synchronous way******************//
/*const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}.\ncreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written successfully!');
 */

//**********************Non - blocking, asynchronous way****************//
/*fs.readFile('./text/start.txt' ,'utf-8', (err,data1) => {
    fs.readFile('./text/start.txt' ,'utf-8', (err,data2) => {
         console.log(data);
         fs.readFile('./text/start.txt' ,'utf-8', (err,data3) =>{
            console.log(data3);

            fs.writeFile('./txt/final.txt', '${data2}\n${data3}','utf-8', err => {
                console.log('Your file has been written');
            })
        });
     });
});
console.log('Will read file');
*/
///////////////////////////////////////////////////////////
//************************************Server****************************//
const sever = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || patnName === '/overview'){
        res.end('This is the OVERVIEW');
    }else is (pathName === '/product'){
        res.end('This is the PRODUCT');
    }else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>Page not found!</h1>');
    }
});










