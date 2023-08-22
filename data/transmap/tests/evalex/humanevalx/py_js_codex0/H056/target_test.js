//TESTED_PROGRAM

if(correct_bracketing('<>') !== true)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<<><>>') !== true)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<><><<><>><>') !== true)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<><><<<><><>><>><<><><<>>>') !== true)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<<<><>>>>') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('><<>') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<<<<') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('>') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<<>') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<><><<><>><>><<>') !== false)
  throw Error("MyLogError MISMATCH");
if(correct_bracketing('<><><<><>><>>><>') !== false)
  throw Error("MyLogError MISMATCH");