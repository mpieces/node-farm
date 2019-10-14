const fs = require('fs');
const http = require('http');
const url = require('url');



//synchronous or blocking code execution
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

////////////////////////////
// SERVER
 const server = http.createServer((req, res) =>  {
     const pathName = req.url;

     if(pathName === '/' || pathName === '/overview') {
         res.end('This is the OVERVIEW');
     } else if (pathName === '/product') {
         res.end('This is the PRODUCT');
     } else {
         // specify an object with the headers you want to send
         res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
         })
         res.end('<h1>Page not found!</h1>');
     }




     res.end('Hello from the server');
 });

 server.listen(8000, '127.0.0.1', () => {
     console.log('Listening to requests on port 8000');
 })