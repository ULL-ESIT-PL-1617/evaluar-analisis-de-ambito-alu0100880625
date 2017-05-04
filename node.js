const util = require("util");

class Node {
  constructor(node) {
    Object.assign(this,node);
  }
};

class BinOp extends Node{
  translate() {
    console.log("visiting: "+util.inspect(this, {depth:1}))
    let leftTranslate = this.left.translate();
    let opTrans = this.type;
    if (opTrans == ",") opTrans += '\n  ';
    else if (opTrans == "=") {
      leftTranslate = `sym[${leftTranslate}]`;
    } else if (opTrans == "CALL") {
      return `${this.left.translate()}()`;
    }
    return leftTranslate + opTrans + this.right.translate();
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

