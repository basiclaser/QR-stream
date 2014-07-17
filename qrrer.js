#!/usr/local/bin/node

var zlib = require('zlib');
var qr = require('./QR');
// var gzip = zlib.createGzip();

// console.log(qr.genframe("test it"));
var qrts = new qr.QRTransformer();
var fs = require('fs');
var inp = fs.createReadStream('input.txt');
var out = fs.createWriteStream('output.txt');

inp.pipe(qrts).pipe(out);

// inp.pipe(qrts).pipe(process.stdout);
// inp.end;
// qrts.pipe(process.stdout); // output to stdout
// qrts.write('hello world\n'); // input line 1
// qrts.write('another line');  // input line 2
// qrts.end();