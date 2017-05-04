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

class Leaf extends Node{
  translate() {
    console.log("visiting: "+util.inspect(this, {depth:null}))
    return this.value;
  }
};

Array.prototype.translate = function() {
  return this.reduce((s,n) => s += n.translate(), '');
};

module.exports = {Node: Node, BinOp: BinOp, Leaf: Leaf};

