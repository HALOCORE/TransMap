//TESTED_PROGRAM

if(JSON.stringify(reverse_delete('abcde', 'ae')) !==
JSON.stringify(['bcd', false]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('abcdef', 'b')) !==
    JSON.stringify(['acdef', false]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('abcdedcba', 'ab')) !==
    JSON.stringify(['cdedc', true]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('dwik', 'w')) !==
    JSON.stringify(['dik', false]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('a', 'a')) !==
    JSON.stringify(['', true]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('abcdedcba', '')) !==
    JSON.stringify(['abcdedcba', true]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('abcdedcba', 'v')) !==
    JSON.stringify(['abcdedcba', true]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('vabba', 'v')) !==
    JSON.stringify(['abba', true]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(reverse_delete('mamma', 'mia')) !==
    JSON.stringify(['', true]))
  throw Error("MyLogError MISMATCH");