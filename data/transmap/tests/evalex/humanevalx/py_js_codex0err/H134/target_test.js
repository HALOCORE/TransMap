//TESTED_PROGRAM

function test(){

if(check_if_last_char_is_a_letter('apple') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('apple pi e') !== true)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('eeeee') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('A') !== true)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('Pumpkin pie ') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('Pumpkin pie 1') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('eeeee e ') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('apple pie') !== false)
  throw Error("MyLogError MISMATCH");
if(check_if_last_char_is_a_letter('apple pi e ') !== false)
  throw Error("MyLogError MISMATCH");
}

test();
