{
  var util = require("util");

  var { Node, Call, FunctionDef, BinOp, Leaf } = require('./node.js');

  var buildTree = function(left,rest) {
     if (rest.length == 0) return left;  
     return rest.map(function([ operator, operand]){
        return (new BinOp({type:operator, left: left, right: operand}));
     });
  }
}

start
  = c:comma { return c; }

comma
  = a:assign COMMA c:comma { return new BinOp({type:',', left:a, right: c}); }
  / assign
assign
  = id:ID ASSIGN a:assign { return new BinOp({type : '=', left: id, right:a}); }
  / additive

additive
  = left:multiplicative rest:(ADDOP multiplicative)* { return buildTree(left, rest); }

multiplicative
  = left:primary rest:(MULOP primary)* { return buildTree(left, rest); }

primary
  = integer
  / f:ID LEFTPAR args:args RIGHTPAR { 
       return new Call({type: 'CALL', left: f, right: args});
     }
  / ID
  / LEFTPAR params:params ARROW a:assign {
       return new FunctionDef({type: 'FUNCTION', left: params, right: a});
     }
  / LEFTPAR c:comma RIGHTPAR {return c;}

args = !COMMA p1:assign? pr:(COMMA assign)* {
             var args = p1? [ p1] : []; 
             args = args.concat(pr.map(([_, t]) => t));
             //console.log("*****!!! args = ",util.inspect(args));
             return args;
          }

params = p:(ID COMMA)* pl:ID? RIGHTPAR {
             var params = p.map(([id, _ ]) => id);
             if (pl) params.push(pl);
             //console.log("************* params = ",util.inspect(params));
             return params;
          }

integer "integer"
  = NUMBER

_ = [ \t\n\r]* ("#" [^\n\r\u2028\u2029]*)* 

  

ADDOP = PLUS / MINUS
MULOP = MULT / DIV
COMMA = _","_  { return ','; }
PLUS = _"+"_   { return '+'; }
MINUS = _"-"_  { return '-'; }
MULT = _"*"_   { return '*'; }
DIV = _"/"_    { return '/'; }
LEFTPAR = _"("_
RIGHTPAR = _")"_
NUMBER = _ n:$[0-9]+ _                { return new Leaf({type:'NUM', value: n});}
ID = _ id: $([a-z_]i$([a-z0-9_]i*)) _ { return new Leaf({type:'ID',  value: id});}
ARROW = _ '=>' _                      
ASSIGN = _ '=' _
