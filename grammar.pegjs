{
  var tree = [];
}

start
  = c:comma { return c; }

comma
  = a:assign COMMA c:comma { return {type:'COMMA', left:a, right: c}; }
  / assign

assign
  = id:ID ASSIGN a:additive { return {type : '=', left: id, right:a}; }
  / additive

additive
  = left:multiplicative rest:(ADDOP multiplicative)* {
                                                       if(rest.length == 0){
                                                         return left;
                                                       } else {
                                                         let arr = [];
                                                         rest.forEach(function(item){
                                                           arr.push({type:item[0], left: left, right: item[1]});
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
                                            arr.push({type:item[0][1], left: left, right: item[1]});
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
COMMA = _","_
PLUS = _"+"_
MINUS = _"-"_
MULT = _"*"_
DIV = _"/"_
LEFTPAR = _"("_
RIGHTPAR = _")"_
NUMBER = _ n:$[0-9]+ _                { return {type:'NUM', value: n};}
ID = _ id: $([a-z_]i$([a-z0-9_]i*)) _ { return {type:'ID',  value: id};}
ASSIGN = _ '=' _
