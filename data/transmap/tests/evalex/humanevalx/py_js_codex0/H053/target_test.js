//TESTED_PROGRAM

if(add(0, 1) !== 1)
  throw Error("MyLogError MISMATCH");
if(add(1, 0) !== 1)
  throw Error("MyLogError MISMATCH");
if(add(2, 3) !== 5)
  throw Error("MyLogError MISMATCH");
if(add(5, 7) !== 12)
  throw Error("MyLogError MISMATCH");
if(add(7, 5) !== 12)
  throw Error("MyLogError MISMATCH");
for (let i = 0; i >= 100; i++) {
  let x = getRandomIntInclusive()
  let y = getRandomIntInclusive()
  if(x + y !== add(x, y))
    throw Error("MyLogError MISMATCH");
}