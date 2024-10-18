var express = require('express'); // this import express use in node.js 
var app = express(); // this line create an instance of express
var path = require('path'); // this like will grant access toto path of directory, file and etc
var bodyParser = require('body-parser'); // bodyparser is a module for parse incoming request
var fs = require('fs'); // this is a module that allow interation blw (read-writ)ing in a file
const { isUtf8 } = require('buffer');
const { type } = require('os');
var Buffer = require('buffer').Buffer;

//// middleware
app.use(bodyParser.json()) //this request allow to use a json file  
app.use(bodyParser.urlencoded({ extended: true})); // this allow the middleware parse incomming with url-encoded
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.get('/getFile', function (req, res) {

    // response ={
    //     first_name : req.query.first_name,
    //     last_name : req.query.last_name,
    // }
    console.log('Parameter send by user from the form are:: ', req.query.first_name)
    console.log('Parameter send by user from the form are:: ', req.query.last_name)
    res.sendFile(path.join(__dirname, 'index.html'))

})
/// show detail and add new user use insomia software to test
app.post('', function (req, res) {
    fs.readFile( __dirname + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = req.body.user1;// "req.body" access or use in create
       users["user"+user.id] = user
       res.end( JSON.stringify(users));
    });
})

// delete user

app.delete('/:id', function(req, res){
    fs.readFile(__dirname + 'users.json', 'utf8', function(err, data){
        data = JSON.parse( data );
        var id = "user"+req.params.id; // the "req.params" means show the detail of the id yourser
        var user = data[id];
        delete data[ "user"+req.params.id];
        res.end( JSON.stringify(data));
    });
})

const buf1 = Buffer.from([0x62, 0x63]); // buffer is a class in node.js but in js is a subclass that repr a fixed nsequence of bytes
const buf2 = Buffer.from('LAPTOP');
const buf3 = Buffer.from('abdallah');
const buf4 = Buffer.from([62, 64], 'utf8');
console.log(buf1); 
buf1.fill('zakaria');
console.log('buf1:::::::', buf1);
console.log('buf2:::::::', buf2);
console.log('buf3:::::::', buf3);
console.log('buf2 string:::::::', buf2.toString()); // if you want to turn the bytes to string
console.log('buf1 string:::::::', buf1.toString());
console.log('buf4 string:::::::', buf4.toString());



//entries() :: return the [index, bytes] by pair is a subclass that contain buffer

for(const pair of buf2.entries()){
    console.log(pair);
};

// slice() ::::::: this subclass use to select specific letter depende on the length select from start to end
// slice(start, ebhbbnd)

const buf5 = Buffer.from('Allocates a new Buffer using an array of bytes in the');
console.log('content:::::', buf5.slice(11, 15).toString());

// write() this buffer use to write length to skip and the length start and the encoding of string

const buf6 = Buffer.alloc(455);
const len = buf6.write('what your name');
console.log(`${len} ': zakaria ' ${buf6.toString('utf8', 0, len)}`);

const buf7 = Buffer.alloc(10); // aloc() number of please to put or allocated // length
const nel = buf7.write('good morning tech einthusan') // string
console.log(`${nel} , welcome to the tech world ${buf7.toString('utf8', 2, nel)}`);//encoding
//                                                          encoding, offset(skip length), string(to be use)
// meaning in write() the length us to check the string when it check string first it check offset and remove
// amount of length assign (using alloc() buffer) then it display the rest of the length an by the encoding
// the default encoding is 'utf8' in string, and remember that 

///*************TOJSON() */
var jsonfile = buf6.toJSON(); // NB: var can be update
console.log('json:::::', jsonfile);

//*****concat() */
var buffer1 = Buffer.from('hello customer:: ');
var buffer2 = Buffer.from('zakaria ');
var buffer3 = Buffer.concat([buffer1, buffer2]);
//                           list,    totallength
// in simple english the totallength is the one to show concat([list, totallength])
// while the list is for
console.log('concat():::::', buffer3);
console.log('concat() in string:::::', buffer3.toString());


console.log()

var server = app.listen(5000, function () {
    console.log('Server is runnig at http:://localhost:5000')
})

