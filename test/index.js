var should = require('chai').should();
var { Node, Call, FunctionDef, BinOp, Comma, Leaf } = require('../node.js');
var PEG = require("../grammar.js");
var genCode = require("../gen-code.js");

describe('translation', function() {
  it('translates a = 4', function() { // change this test!
    var r = PEG.parse('a = 4');
    let expected = new BinOp({
                      type: '=',
                      left: new Leaf({ type: 'ID', value: 'a' }),
                      right: new Leaf({ type: 'NUM', value: '4' }) 
                   });
    r.should.deep.equal(expected); 
  });
});

