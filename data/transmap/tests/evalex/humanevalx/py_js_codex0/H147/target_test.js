//TESTED_PROGRAM

if(get_max_triples(5) !== 1)
  throw Error("MyLogError MISMATCH");
if(get_max_triples(6) !== 4)
  throw Error("MyLogError MISMATCH");
if(get_max_triples(10) !== 36)
  throw Error("MyLogError MISMATCH");
if(get_max_triples(100) !== 53361)
  throw Error("MyLogError MISMATCH");