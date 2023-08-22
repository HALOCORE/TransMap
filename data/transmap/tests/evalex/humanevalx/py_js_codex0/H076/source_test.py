#TESTED_PROGRAM

if is_simple_power(1, 4)!= True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(2, 2)!=True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(8, 2)!=True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(3, 2)!=False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(3, 1)!=False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(5, 3)!=False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(16, 2)!= True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(143214, 16)!= False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(4, 2)!=True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(9, 3)!=True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(16, 4)!=True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(24, 2)!=False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(128, 4)!=False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(12, 6)!=False:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(1, 1)!=True:
  raise Exception("MyLogError MISMATCH")
if is_simple_power(1, 12)!=True:
  raise Exception("MyLogError MISMATCH")