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
    else if (opTrans == "CALL") {
      let argstrans = this.right.translate(',');
      return `${this.left.translate()}(${argstrans})`;
    }
    else if (opTrans == "FUNCTION") {
      console.log("*****************Function "+util.inspect(this.left));
      let trans = "("+this.left.map(({type:_, value:x}) => x).join(",")+")";
      trans += " => ";
      trans += this.right.translate();
      return trans;
    }
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

Array.prototype.translate = function(j) {
  return this.map((t) => t.translate()).join(j || '');
};

module.exports = {Node: Node, BinOp: BinOp, Leaf: Leaf};

