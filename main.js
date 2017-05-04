#!/usr/bin/env node

function genCode(aas){
  for(var keys in aas){
    console.log(aas[keys]);
  }
}

var PEG = require("./grammar.js");
var input = process.argv[2] || "a=5, b= 3*2";
console.log(`Processing <${input}>`);
var r = PEG.parse(input);
console.log(JSON.stringify(r, null, 2));

genCode(r);
