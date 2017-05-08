const util = require("util");

class Node {
  constructor(node) {
    Object.assign(this,node);
  }
};

class BinOp extends Node{
  translate() {
    console.log("visiting: "+util.inspect(this, {depth:1}))
    return this.left.translate() + this.type + this.right.translate();
  }
};

class Comma extends Node{
  translate() {
    return this.left.translate() + ",\n  " + this.right.translate();
  }
};

class Leaf extends Node{
  translate() {
    console.log("visiting: "+util.inspect(this, {depth:null}))
    var trans = (this.type == 'ID')? `sym.${this.value}`: this.value;
    return trans;
  }
};

Array.prototype.translate = function(j) {
  return this.map((t) => t.translate()).join(j || '');
};

module.exports = {
  Node: Node, 
  BinOp: BinOp, 
  Comma: Comma,
  Leaf: Leaf
};

