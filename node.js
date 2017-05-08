const util = require("util");

class Node {
  constructor(node) {
    Object.assign(this,node);
  }
};

class Call extends Node {
  translate() {
    let argstrans = this.right.translate(',');
    //console.log('--------> "'+argstrans+'"');
    argstrans += (argstrans !== '')? ", sym" : "sym";
    return `${this.left.translate()}(${argstrans})`;
  };
}

class FunctionDef extends Node {
    translate() {
      //console.log("*****************Function "+util.inspect(this.left));
      let params = this.left.map(({type:_, value:x}) => x);
      let paramsTrans = params.concat(["oldSym"]).join(",");
      let trans = "function("+paramsTrans+") {\n";
      trans += "    let sym = {};\n";
      let paramDecl = params.map((x) => x+":"+x).join(',');
      trans += "    Object.assign(sym, oldSym, {" +paramDecl+"});\n";
      trans += '    return '+this.right.translate()+"\n  }";
      return trans;
    }
}

class BinOp extends Node{
  translate() {
    //console.log("visiting: "+util.inspect(this, {depth:1}))
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
    //console.log("visiting: "+util.inspect(this, {depth:null}))
    var trans = (this.type == 'ID')? `sym.${this.value}`: this.value;
    return trans;
  }
};

Array.prototype.translate = function(j) {
  return this.map((t) => t.translate()).join(j || '');
};

module.exports = {
  Node: Node, 
  Call: Call, 
  FunctionDef: FunctionDef, 
  BinOp: BinOp, 
  Comma: Comma,
  Leaf: Leaf
};

