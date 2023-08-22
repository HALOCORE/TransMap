//TESTED_PROGRAM

function test(){

if(sum_squares([1, 2, 3]) !== 6)
  throw Error("MyLogError MISMATCH");
if(sum_squares([1, 4, 9]) !== 14)
  throw Error("MyLogError MISMATCH");
if(sum_squares([]) !== 0)
  throw Error("MyLogError MISMATCH");
if(sum_squares([1, 1, 1, 1, 1, 1, 1, 1, 1]) !== 9)
  throw Error("MyLogError MISMATCH");
if(sum_squares([-1, -1, -1, -1, -1, -1, -1, -1, -1]) !== -3)
  throw Error("MyLogError MISMATCH");
if(sum_squares([0]) !== 0)
  throw Error("MyLogError MISMATCH");
if(sum_squares([-1, -5, 2, -1, -5]) !== -126)
  throw Error("MyLogError MISMATCH");
if(sum_squares([-56, -99, 1, 0, -2]) !== 3030)
  throw Error("MyLogError MISMATCH");
if(sum_squares([-1, 0, 0, 0, 0, 0, 0, 0, -1]) !== 0)
  throw Error("MyLogError MISMATCH");
if(
    sum_squares([
      -16, -9, -2, 36, 36, 26, -20, 25, -40, 20, -4, 12, -26, 35, 37,
    ]) !== -14196
  )
  throw Error("MyLogError MISMATCH");
if(
    sum_squares([
      -1, -3, 17, -1, -15, 13, -1, 14, -14, -12, -5, 14, -14, 6, 13, 11, 16, 16,
      4, 10,
    ]) !== -1448
  )
  throw Error("MyLogError MISMATCH");
}

test();
