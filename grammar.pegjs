start
  = comma { return text(); }

comma 
  = assign COMMA comma 
  / assign

assign
  = ID ASSIGN additive
  / additive

additive
  = multiplicative (ADDOP multiplicative)*
  / multiplicative

multiplicative
  = primary (MULOP primary)*
  / primary

primary
  = integer
  / ID
  / LEFTPAR comma RIGHTPAR

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
NUMBER = _ $[0-9]+ _
ID = _ $([a-z_]i$([a-z0-9_]i*)) _
ASSIGN = _ '=' _
