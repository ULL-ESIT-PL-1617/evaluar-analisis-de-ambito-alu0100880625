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

describe('code generation', function() {
  let compile = function(input) {
    var r = PEG.parse(input);
    var t = genCode(r);
    return t;
  };
  let compileEval = function(input) {
    var t = compile(input);
    var x = eval(t);
    return x();
  };

  it('translates  a = 4', function() { 
    var r = compile('a = 4');
    let expected =  /sym.a\s*=\s*4/;
    r.should.match(expected); 
  });

  it('translates  a = 4, b = a + 1', function() { 
    var r = compileEval('a = 4, b = a+1');
    let expected = {a:4, b:5};
    r.should.deep.equal(expected); 
  });

  it('translates  a = 4, f = (x) => x*a,  # Comentario\\n z = f(2)', function() { 
    var r = compileEval('a = 4, f = (x) => x*a, # Comentario\nz = f(2)');
    let expected = {a:4, z:8};
    (({a, z}) => ({a, z}))(r).should.deep.equal(expected); 
  });
});

