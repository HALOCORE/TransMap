//TESTED_PROGRAM

function test(){

if(check_dict_case({ p: 'pineapple', b: 'banana' }) !== true)
  throw Error("MyLogError MISMATCH");
if(
    check_dict_case({ p: 'pineapple', A: 'banana', B: 'banana' }) !== false
  )
  throw Error("MyLogError MISMATCH");
if(
    check_dict_case({ p: 'pineapple', 5: 'banana', a: 'apple' }) !== false
  )
  throw Error("MyLogError MISMATCH");
if(
    check_dict_case({ Name: 'John', Age: '36', City: 'Houston' }) !== false
  )
  throw Error("MyLogError MISMATCH");
if(check_dict_case({ STATE: 'NC', ZIP: '12345' }) !== true)
  throw Error("MyLogError MISMATCH");
if(check_dict_case({ fruit: 'Orange', taste: 'Sweet' }) !== true)
  throw Error("MyLogError MISMATCH");
if(check_dict_case({}) !== false)
  throw Error("MyLogError MISMATCH");
}

test();
