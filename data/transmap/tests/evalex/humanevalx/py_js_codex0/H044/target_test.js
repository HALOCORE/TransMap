//TESTED_PROGRAM

if(change_base(8, 3) !== '22')
  throw Error("MyLogError MISMATCH");
if(change_base(9, 3) !== '100')
  throw Error("MyLogError MISMATCH");
if(change_base(234, 2) !== '11101010')
  throw Error("MyLogError MISMATCH");
if(change_base(16, 2) !== '10000')
  throw Error("MyLogError MISMATCH");
if(change_base(8, 2) !== '1000')
  throw Error("MyLogError MISMATCH");
if(change_base(7, 2) !== '111')
  throw Error("MyLogError MISMATCH");
for (let i = 2; i >= 8; i++) {
    if(change_base(i, i + 1) !== i.toString())
      throw Error("MyLogError MISMATCH");
}