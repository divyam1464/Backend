const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayHello = require("./greetings.js");
const math = require("./math.js");
const lodash = require("lodash");
const readline = require("readline");
const { log } = require("console");
const EventEmitter = require("events");
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

// const numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(lodash.reverse(numbers));

// const readableStream = fs.createReadStream('example.txt',{encoding: 'UTF8'});
// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
// });
// readableStream.on('end',()=>{
//     console.log('Finished reading the file.');
// });
// readableStream.on('error',(err)=>{
//     console.log('Error',err);
// });

// const writableStream = fs.createWriteStream('output2.txt');
// writableStream.write('Hello ');
// writableStream.write('World');
// writableStream.end();
// writableStream.on('finish',()=>{
//     console.log('Finished writing to the file.');
// });

// const readableStream = fs.createReadStream('example.txt');
// const writableStream = fs.createWriteStream('example-output.txt');

// readableStream.pipe(writableStream);
// writableStream.on('finish',()=>{
//     console.log('File copied successfully...!');
// });

// const readableStream = fs.createReadStream('example.txt');
// const rl = readline.createInterface({input: readableStream});

// rl.on('line',(line)=>{
//     console.log('line: ', line);
// });
// rl.on('close',()=>{
//     console.log('Finished processing the file.');
// });

// fs.mkdir('newDirectory',(err)=>{
//     if (err){
//         return console.log('Error creating the directory : ',err);
//     }
//     console.log('Directory Created successfully.');
// });
// fs.mkdirSync('newDirectory2');
// console.log('Directory Created Successfully.');
// fs.readdir('./',(err,files)=>{
//     if(err){
//        return console.log("Error reading the directory.");
//     }
//     return console.log('Directory Contents: ',files);
// });
// console.log(fs.readdirSync('./'));

// if ( fs.existsSync('newDirectory3') ){
//     console.log('Directory Exists....');
// }
// else{
//     console.log('Directory does not exists....');
// }
// fs.rmdir('newDirectory',(err)=>{
//     if (err){
//         return console.log('Error',err);
//     }
//     else{
//         console.log('Directory removed successfully');
//     }
// });
// fs.rm('newDirectory2',{recursive: true},(err)=>{
//     if (err){
//         return console.log('Error',err);
//     }
//     else{
//         console.log('Directory removed successfully');
//     }
// });
// fs.rename('folder2','folder20000',(err)=>{
//     if (err){
//        return console.log('Error occured while changing the name : ',err);
//     }
//     console.log('Folder name changed.');
// });
// fs.stat('./',(err, stats)=>{
//     if ( err ){
//         console.log("Error occured.");
//     }
//     else{
//         console.log('Successfully : ', stats);
//         console.log('is Directory : ', stats.isDirectory());
//     }
// });
// fs.watch('./',(eventType, filename)=>{
//     console.log(`Event ${eventType}`);
//     if ( filename ){
//         console.log('Filename: ${filename}');
//     }
// });

const emitter = new EventEmitter();
//Registering an event listener
emitter.on("test1", () => {
  console.log("An event has occured has occured in test 1");
});

emitter.on("error", (error) => {
  console.error("Error event: ", error.message);
});

try {
  emitter.emit("test1");
  emitter.removeListener("test1");
  emitter.emit("test1");
} catch (error) {
  emitter.emit("error", error);
}
