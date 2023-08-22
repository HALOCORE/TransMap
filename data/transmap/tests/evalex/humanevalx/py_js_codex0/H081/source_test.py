#TESTED_PROGRAM

if numerical_letter_grade([4.0, 3, 1.7, 2, 3.5]) != ['A+', 'B', 'C-', 'C', 'A-']:
  raise Exception("MyLogError MISMATCH")
if numerical_letter_grade([1.2]) != ['D+']:
  raise Exception("MyLogError MISMATCH")
if numerical_letter_grade([0.5]) != ['D-']:
  raise Exception("MyLogError MISMATCH")
if numerical_letter_grade([0.0]) != ['E']:
  raise Exception("MyLogError MISMATCH")
if numerical_letter_grade([1, 0.3, 1.5, 2.8, 3.3]) != ['D', 'D-', 'C-', 'B', 'B+']:
  raise Exception("MyLogError MISMATCH")
if numerical_letter_grade([0, 0.7]) != ['E', 'D-']:
  raise Exception("MyLogError MISMATCH")