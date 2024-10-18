var express = require('express');
var fs = require('fs');
var path = require('path');
const { callbackify } = require('util');
var app = express();

// var text = "what is the true meaning of life, an waht mean of light even if you don't see it"

// // FILE SYSTEM
// //writing synchronous
// console.log('writing synchronous');
// fs.writeFileSync('input.txt', text);

// console.log('writing asynchronous');
// fs.writeFile('input.txt', text, function(err){
//     err ? console.log(err) : console.log('Write Operation Complete')
// });

////Reading synchro & asynchr
// console.log('Reading Synchronous');
// data = fs.readFileSync('input.txt');
// console.log(data.toString()) // bcuz is in bytes remember that fs read in data in byte like steam

// // reading operation (synchronous) can push or pull only while writing operation (asynchronous) can push or pull , & seen error
// console.log('Reading Asynchronous');
// fs.readFile('input.txt', function(err){
//     err ? console.log(err) : console.log('READ ASYNCHRONOUS:', data.toString());
// });

////Open a file
// var fd = fs.open('input.txt', 'w', (err, fd) => {
//     //fs.open(path, flag/mode, callback)
//     err ? console.log(err) : console.log('SUCCESSFULL');
// })

////GET FILE INFO////
// console.log('GET FILE INFO');
// fs.stat('input.txt', (err, stats) => {
//     err ? console.log(err) :
//     // this 'stats' attribute of the file
//     console.log(stats); // will get all the attribute of the file
//     console.log('GET IT SUCESSIFULLY');

//     //getting the type

//     console.log(stats.isFile, ":::::::::::isFIle") // chaeck if is a simple file if yes then true
//     console.log(stats.isDirectory, ":::::::::::isDirectory")
//     console.log(stats.isFIFO, ":::::::::::isFIFO")                                                                                  
//})

//open - write or read by syncr then close stat
///when there is many large number callback then came unorganise because ther many activities that were we use nest
// var data = "an waht mean of light even if you don't see i, what is the true meaning of lifet"
// async function write_file() {
//     await fs.promises.writeFile('input.txt', data)
//     console.log('successfull writen')
// }
// write_file();

// //***DELETING AND CREATE AN EXISTING FILE */
// fs.unlink('input.txt', (err) => {
//     err ? console.log(err) :
//     console.log('THE FILE ASSIGN HAS BEEN SUCCESFULLY DELETED');
// });
////create a directory
// fs.mkdir('/proj/test', (err) => {
//     err ? console.log(err) :
//     console.log('new directory has been successfull created');
// })

////accessing a directory

// fs.readdir('/', (err, files)=>{
//     err ? console.log(err) : 
//     console.log('HERE ARE THE FILES FROM THE REPOSITORY PATH:'); 

//     files.forEach((file)=>{
//         console.log(file);
//     });
// })

////remove of directory using 'rmdir'
function new1() {
    console.log("going to write a repository of work")
    fs.mkdir('./work', (err)=>{
        err ? 
        console.log(err) :
        console.log('successifully created!!!');
    })
}

console.log('remove of directory');
fs.rmdir("./work/test/1", (err)=>{
    err ? console.log(err) :

    console.log('reading the directory of WORK')
    fs.readdir('./work/', (err)=>{
        err ? new1() :
        console.log('here are ther files')
    })

})

var server = app.listen(8000, function () {
    console.log('server running on http://localhost:8000');
})