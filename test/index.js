var should = require('chai').should();
var { Node, Call, FunctionDef, BinOp, Comma, Leaf } = require('../node.js');
var PEG = require("../grammar.js");
var genCode = require("../gen-code.js");

describe('parser', function() {
  it('builds the tree for a = 4', function() { 
    var r = PEG.parse('a = 4');
    let expected = new BinOp({
                      type: '=',
                      left: new Leaf({ type: 'ID', value: 'a' }),
                      right: new Leaf({ type: 'NUM', value: '4' }) 
                   });
    r.should.deep.equal(expected); 
  });
});

