{
  var { Node, BinOp, Leaf } = require('./node.js');
}

start
  = c:comma { return c; }

comma
  = a:assign COMMA c:comma { return new BinOp({type:',', left:a, right: c}); }
  / assign

assign
  = id:ID ASSIGN a:additive { return new BinOp({type : '=', left: id, right:a}); }
  / additive

additive
  = left:multiplicative rest:(ADDOP multiplicative)* {
                                     if(rest.length == 0){
                                       return left;
                                     } else {
                                       let arr = [];
                                       rest.forEach(function(item){
                                         arr.push(new BinOp({type:item[0], left: left, right: item[1]}));
                                       });
                                       return arr;
                                     }
                                  }
  / multiplicative

multiplicative
  = left:primary rest:(MULOP primary)* {
                            if(rest.length == 0){
                              return left;
                            } else {
                              let arr = [];
                               rest.forEach(function(item){
                                 arr.push(new BinOp({type:item[0], left: left, right: item[1]}));
                               });
                              return arr;
                            }
                           }
  / primary

primary
  = integer
  / ID
  / LEFTPAR c:comma RIGHTPAR {return c;}

integer "integer"
  = NUMBER

_ = $[ \t\n\r]*

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
ASSIGN = _ '=' _
