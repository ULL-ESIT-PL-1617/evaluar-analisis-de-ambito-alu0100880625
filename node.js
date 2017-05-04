const util = require("util");

class Node {
  constructor(node) {
    Object.assign(this,node);
  }
};

class BinOp extends Node{
  translate() {
    console.log("visiting: "+util.inspect(this, {depth:1}))
    var leftTranslate = this.left.translate();
    var opTrans = this.type;
    if (opTrans == ",") opTrans += '\n  ';
    return leftTranslate + opTrans + this.right.translate();
  }
};

class Leaf extends Node{
  translate() {
    console.log("visiting: "+util.inspect(this, {depth:null}))
    var trans = (this.type == 'ID')? `sym[${this.value}]`: this.value;
    return trans;
  }
};

Array.prototype.translate = function() {
  return this.reduce((s,n) => s += n.translate(), '');
};

module.exports = {Node: Node, BinOp: BinOp, Leaf: Leaf};

