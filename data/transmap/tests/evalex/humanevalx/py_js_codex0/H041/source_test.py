#TESTED_PROGRAM

if car_race_collision(2) != 4:
  raise Exception("MyLogError MISMATCH")
if car_race_collision(3) != 9:
  raise Exception("MyLogError MISMATCH")
if car_race_collision(4) != 16:
  raise Exception("MyLogError MISMATCH")
if car_race_collision(8) != 64:
  raise Exception("MyLogError MISMATCH")
if car_race_collision(10) != 100:
  raise Exception("MyLogError MISMATCH")