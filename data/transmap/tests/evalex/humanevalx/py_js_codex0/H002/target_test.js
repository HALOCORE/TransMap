//TESTED_PROGRAM

if(truncate_number(3.5) !== 0.5)
  throw Error("MyLogError MISMATCH");
if(Math.abs(truncate_number(1.33) - 0.33) >= 1e-6)
  throw Error("MyLogError MISMATCH");
if(Math.abs(truncate_number(123.456 - 0.456) >= 1e-6))
  throw Error("MyLogError MISMATCH");