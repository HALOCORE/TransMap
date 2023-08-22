//TESTED_PROGRAM

function test(){

if(fix_spaces('Example') !== 'Example')
  throw Error("MyLogError MISMATCH");
if(fix_spaces('Mudasir Hanif ') !== 'Mudasir_Hanif_')
  throw Error("MyLogError MISMATCH");
if(
  fix_spaces('Yellow Yellow  Dirty  Fellow') !== 'Yellow_Yellow__Dirty__Fellow'
  )
  throw Error("MyLogError MISMATCH");
if(fix_spaces('Exa   mple') !== 'Exa-mple')
  throw Error("MyLogError MISMATCH");
if(fix_spaces('   Exa 1 2 2 mple') !== '-Exa_1_2_2_mple')
  throw Error("MyLogError MISMATCH");
}

test();
