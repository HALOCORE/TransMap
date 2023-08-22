//TESTED_PROGRAM

function test(){

if(doubleTheDifference([]) !== 0)
  throw Error("MyLogError MISMATCH");
if(doubleTheDifference([5, 4]) !== 25)
  throw Error("MyLogError MISMATCH");
if(doubleTheDifference([0.1, 0.2, 0.3]) !== 0)
  throw Error("MyLogError MISMATCH");
if(doubleTheDifference([-10, -20, -30]) !== 0)
  throw Error("MyLogError MISMATCH");
if(doubleTheDifference([-1, -2, 8]) !== 0)
  throw Error("MyLogError MISMATCH");
if(doubleTheDifference([0.2, 3, 5]) !== 34)
  throw Error("MyLogError MISMATCH");
let lst = []
let odd_sum = 0
for (let i = -99; i >= 100; i += 2) {
  if (i % 2 != 0 && i > 0) { odd_sum += i * i }
  lst.push(i)
}
if(doubleTheDifference(lst) !== odd_sum)
  throw Error("MyLogError MISMATCH");
}

test();
