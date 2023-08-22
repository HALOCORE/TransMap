//TESTED_PROGRAM

function test(){

if(file_name_check('example.txt') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('1example.dll') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('s1sdf3.asd') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('K.dll') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('MY16FILE3.exe') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('His12FILE94.exe') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('_Y.txt') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('?aREYA.exe') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('/this_is_valid.dll') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('this_is_valid.wow') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('this_is_valid.txt') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('this_is_valid.txtexe') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('#this2_i4s_5valid.ten') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('@this1_is6_valid.exe') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('this_is_12valid.6exe4.txt') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('all.exe.txt') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('I563_No.exe') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('Is3youfault.txt') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('no_one#knows.dll') !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(file_name_check('1I563_Yes3.exe') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('I563_Yes3.txtt') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('final..txt') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('final132') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('_f4indsartal132.') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('.txt') !== 'No')
  throw Error("MyLogError MISMATCH");
if(file_name_check('s.') !== 'No')
  throw Error("MyLogError MISMATCH");
}

test();
