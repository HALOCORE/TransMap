#TESTED_PROGRAM

if anti_shuffle('Hi') != 'Hi':
  raise Exception("MyLogError MISMATCH")
if anti_shuffle('hello') != 'ehllo':
  raise Exception("MyLogError MISMATCH")
if anti_shuffle('number') != 'bemnru':
  raise Exception("MyLogError MISMATCH")
if anti_shuffle('abcd') != 'abcd':
  raise Exception("MyLogError MISMATCH")
if anti_shuffle('Hello World!!!') != 'Hello !!!Wdlor':
  raise Exception("MyLogError MISMATCH")
if anti_shuffle('') != '':
  raise Exception("MyLogError MISMATCH")
if anti_shuffle('Hi. My name != Mister Robot. How are you?') != '.Hi My aemn != Meirst .Rboot How aer ?ouy':
  raise Exception("MyLogError MISMATCH")