var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

// pipe stream is the act of flush a data fromn one file to another file

var readersteam = fs.createReadStream('input.txt');
var writerstream = fs.createWriteStream('output.txt');

readersteam.pipe(writerstream); // pipe command

// create zip file
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
    
console.log('FILE COMPRESSED');

// decompressed

// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.txt'))

// console.log('FILE IS DECOMPRESSED');


var server = app.listen(7000, function(){
    console.log('server running at http://localhost:7000')
})