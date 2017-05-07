#!/usr/bin/env node
var util = require('util');
var fs = require('fs');
var beautify = require('js-beautify').js_beautify;
var PEG = require("./grammar.js");
var fileName = process.argv[2] || 'input1';

let prefixTemplate = function() {
  return `
module.exports = () => {
  let e;
  let sym = {};
  try {
  `; 
}; // end prefix
let suffixTemplate  = function() {
   return `;
     return sym;
  }
  catch(e) {
    let err = e.message.replace(/sym\\.(\\w+)/g, '$1');
    console.log(err);
    return "error";
  }
}
`; 
}; // end suffix

var genCode = function(tree) {

   var prefix = prefixTemplate();
   var suffix = suffixTemplate();
   /* traverse the tree producing translation */
   return prefix+tree.translate()+suffix;
};

fs.readFile(fileName, 'utf8', function (err,input) {
  if (err) {
    return console.log(err);
  }
  console.log(`Processing <\n${input}\n>`);

  /* Parsing: building AST */
  var r = PEG.parse(input);
  //console.log(util.inspect(r, {depth: null}));


  console.log("********* Code Generation ************");
  let js  = genCode(r);
  js = beautify(js, { indent_size: 2 })
  console.log(js);
  fs.writeFileSync('translation.js', js);
});

