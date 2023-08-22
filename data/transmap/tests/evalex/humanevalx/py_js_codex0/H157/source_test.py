#TESTED_PROGRAM

if right_angle_triangle(3, 4, 5) != True:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(1, 2, 3) != False:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(10, 6, 8) != True:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(2, 2, 2) != False:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(7, 24, 25) != True:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(10, 5, 7) != False:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(5, 12, 13) != True:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(15, 8, 17) != True:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(48, 55, 73) != True:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(1, 1, 1) != False:
  raise Exception("MyLogError MISMATCH")
if right_angle_triangle(2, 2, 10) != False:
  raise Exception("MyLogError MISMATCH")