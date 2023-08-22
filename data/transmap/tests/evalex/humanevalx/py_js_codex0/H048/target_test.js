//TESTED_PROGRAM

if(is_palindrome('') !== true)
  throw Error("MyLogError MISMATCH");
if(is_palindrome('aba') !== true)
  throw Error("MyLogError MISMATCH");
if(is_palindrome('aaaaa') !== true)
  throw Error("MyLogError MISMATCH");
if(is_palindrome('zbcd') !== false)
  throw Error("MyLogError MISMATCH");
if(is_palindrome('xywyx') !== true)
  throw Error("MyLogError MISMATCH");
if(is_palindrome('xywyz') !== false)
  throw Error("MyLogError MISMATCH");
if(is_palindrome('xywzx') !== false)
  throw Error("MyLogError MISMATCH");