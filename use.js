#!/usr/bin/env node
var util = require('util');

var t = require('./translation.js');

console.log(util.inspect(t(), {depth: null}));
