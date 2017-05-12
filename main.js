#!/usr/bin/env node
var util = require('util');
var PEG = require("grammar");
var genCode = require("gen-code");

var input = process.argv[2] || "a=5, b= 3*2";
console.log(`Processing <${input}>`);
var r = PEG.parse(input);

console.log(util.inspect(r, {depth: null}));
/*
let js  = genCode(r);
console.log(js);
*/
