var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs') // this give the ability to work with files
var data = 'hello';

//****************READSTREAM */
var readerStream = fs.createReadStream('input.txt'); // the givr the ability towork with file in piece or in chunks
var writerstream = fs.createWriteStream('output.txt')


readerStream.setEncoding('utf8') // encoding 
readerStream.on('data', function(piece){
    console.log('***************readersteam*(****        -r');
    data += piece;
}); // the will check if data is available an it will fired it

readerStream.on('end', function(){
    console.log(data);
    console.log('finish                                  -r');
}); // this when all data is fired then is execute

readerStream.on('error', function(errortext){
    console.log(errortext.stack);
    console.log('error');
}); // error text when no file was found


//***************writestream */

writerstream.write(data, 'utf8', function(){
    console.log('*****************write****************  -w');
    console.log("the data has been written               -w");
})

writerstream.end(function(){
    console.log("it has been  successiful finish fired   -w");
})

writerstream.on('finish', function(){
    console.log('done                                    -w')
})

writerstream.on('error', function(errortext){
    console.log(errortext.stack);
})

console.log('Program Ended')



// stream is the collection of dara, & all data is not stored at once in a memory
var server = app.listen(6000, function(){
    console.log('server running at http://localhost:6000');
})