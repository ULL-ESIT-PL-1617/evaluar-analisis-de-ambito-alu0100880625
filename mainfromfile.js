#!/usr/bin/env node
var util = require('util');
var fs = require('fs');
var PEG = require("./grammar.js");
var fileName = process.argv[2] || 'input1';

var genCode = function(tree) {
   var prefix = 'module.exports = () => {\n';
   var suffix = '\n}';
   /* traverse the tree producing translation */
   return prefix+tree.translate()+suffix;
};

fs.readFile(fileName, 'utf8', function (err,input) {
  if (err) {
    return console.log(err);
  }
  console.log(`Processing <\n${input}\n>`);
  var r = PEG.parse(input);
  console.log(util.inspect(r, {depth: null}));
  console.log("********* Code Generation ************");
  var js  = genCode(r);
  console.log(js);
});

