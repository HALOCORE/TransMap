//TESTED_PROGRAM

if(car_race_collision(2) !== 4)
  throw Error("MyLogError MISMATCH");
if(car_race_collision(3) !== 9)
  throw Error("MyLogError MISMATCH");
if(car_race_collision(4) !== 16)
  throw Error("MyLogError MISMATCH");
if(car_race_collision(8) !== 64)
  throw Error("MyLogError MISMATCH");
if(car_race_collision(10) !== 100)
  throw Error("MyLogError MISMATCH");