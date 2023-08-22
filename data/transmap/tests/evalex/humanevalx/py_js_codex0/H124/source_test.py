#TESTED_PROGRAM

if valid_date('03-11-2000') != True:
  raise Exception("MyLogError MISMATCH")
if valid_date('15-01-2012') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('04-0-2040') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('06-04-2020') != True:
  raise Exception("MyLogError MISMATCH")
if valid_date('01-01-2007') != True:
  raise Exception("MyLogError MISMATCH")
if valid_date('03-32-2011') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('04-31-3000') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('06-06-2005') != True:
  raise Exception("MyLogError MISMATCH")
if valid_date('21-31-2000') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('04-12-2003') != True:
  raise Exception("MyLogError MISMATCH")
if valid_date('04122003') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('20030412') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('2003-04') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('2003-04-12') != False:
  raise Exception("MyLogError MISMATCH")
if valid_date('04-2003') != False:
  raise Exception("MyLogError MISMATCH")