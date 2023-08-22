//TESTED_PROGRAM

function test(){

if(valid_date('03-11-2000') !== true)
  throw Error("MyLogError MISMATCH");
if(valid_date('15-01-2012') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('04-0-2040') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('06-04-2020') !== true)
  throw Error("MyLogError MISMATCH");
if(valid_date('01-01-2007') !== true)
  throw Error("MyLogError MISMATCH");
if(valid_date('03-32-2011') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('04-31-3000') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('06-06-2005') !== true)
  throw Error("MyLogError MISMATCH");
if(valid_date('21-31-2000') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('04-12-2003') !== true)
  throw Error("MyLogError MISMATCH");
if(valid_date('04122003') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('20030412') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('2003-04') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('2003-04-12') !== false)
  throw Error("MyLogError MISMATCH");
if(valid_date('04-2003') !== false)
  throw Error("MyLogError MISMATCH");
}

test();
