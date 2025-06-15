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
const replaceTemplate = (temp, product) => {
    let output =temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%IMAGE%}/g,product.image);
    output = output.replace(/{%PRICE%}/g,product.price);
    output = output.replace(/{%FROM%}/g,product.from);
    output = output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output = output.replace(/{%QUANTITY%}/g,product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);

if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
return output;
}


const tempOverview = fs.readFileSync('${__dirname}/templates/template-overview.html', 'utf-8');
const tempCard = fs.readFileSync('${__dirname}/templates/template-card.html', 'utf-8');
const tempProduct = fs.readFileSync('${__dirname}/templates/template-product.html', 'utf-8');


const data = fs.readFileSync('${__dirname}/dev-data/data.json', 'utf-8');
 const dataObj = JSON.parse(data);
        


const sever = http.createServer((req, res) => {

    const {query, pathname}= url.parse(req.url, true)


    // Overview page
    if(pathname === '/' || pathname === '/overview'){
    res.writeHead(200,{'Content-type': text/html});

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el )).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml);
    res.end('output');

    // Product Page
    }else if (pathname === '/product'){
        res.writeHead(200,{'Content-type': text/html});
        const prduct = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end('output');
    // API  
    }else if (pathName === '/api'){
      res.writeHead(200,{'Content-type': application/json});
            res.end(data);

    // Not Found
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html'
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listner(8000.'127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});







