#TESTED_PROGRAM

if file_name_check("example.txt") != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check("1example.dll") != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('s1sdf3.asd') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('K.dll') != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check('MY16FILE3.exe') != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check('His12FILE94.exe') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('_Y.txt') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('?aREYA.exe') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('/this_is_valid.dll') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('this_is_valid.wow') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('this_is_valid.txt') != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check('this_is_valid.txtexe') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('#this2_i4s_5valid.ten') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('@this1_is6_valid.exe') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('this_is_12valid.6exe4.txt') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('all.exe.txt') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('I563_No.exe') != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check('Is3youfault.txt') != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check('no_one#knows.dll') != 'Yes':
  raise Exception("MyLogError MISMATCH")
if file_name_check('1I563_Yes3.exe') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('I563_Yes3.txtt') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('final..txt') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('final132') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('_f4indsartal132.') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('.txt') != 'No':
  raise Exception("MyLogError MISMATCH")
if file_name_check('s.') != 'No':
  raise Exception("MyLogError MISMATCH")