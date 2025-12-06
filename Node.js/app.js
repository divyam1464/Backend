const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');
const crypto = require('crypto');
const sayHello = require('./greetings.js');
const math = require('./math.js');
const lodash = require('lodash');
// fs.readFile('example.txt','UTF8',(err,data)=>{
//     if (err){
//         console.log(err);
//         return ;
//     }
//     else{
//         console.log(data);
//     }
// });

// const content = 'Hello Node.js';
// fs.writeFile('output.txt',content,(err)=>{
//     if (err){
//         console.error(err);
//     }
//     console.log('File written successfully : ');
// });

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200 ;
//     res.setHeader('Content-type','text/plain');
//     res.end('Hello, World');
// });

// server.listen(3000,()=>{
//     console.log('Server running at http://localhost:3000');
// });

// const directory = '/user/local';
// const fileName = 'example.txt';

// const fullPath = path.join(directory,fileName);

// console.log(fullPath);

// console.log('Platform: ',os.platform());
// console.log('CPU Architecture: ',os.arch());
// console.log('Total Memory: ',os.totalmem());
// console.log('Free Memory: ',os.freemem());
// console.log('Version: ',os.version());
// console.log('Host Name: ',os.hostname());
// console.log('Release Date: ',os.release());
// console.log('Uptime: ',os.uptime());

// const myUrl = new URL('https://www.google.com/search?q=apple+ipad&sxsrf=AE3TifOG20lP7LcXufHnr1rIAipsdvYibw%3A1765020884936');
// console.log('Host: ',myUrl.host);
// console.log('Path Name: ',myUrl.pathname);
// console.log('Search Parameters: ',myUrl.searchParams.get('q'));

// const hash = crypto.createHash('sha256');
// hash.update('Hello World');
// console.log(hash.digest('hex'));

// const message = sayHello('Developers');
// console.log(message);

// console.log(math.add(5,3));
// console.log(math.subtract(5,3));
// console.log(math.multiply(5,3));
// console.log(math.divide(5,3));

const numbers = [1,2,3,4,5];
console.log(numbers);
console.log(lodash.reverse(numbers));

