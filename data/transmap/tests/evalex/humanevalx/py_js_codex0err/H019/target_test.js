//TESTED_PROGRAM

function test(){
  if(sortNumbers('') !== '')
    throw Error("MyLogError MISMATCH");
  if(sortNumbers('three') !== 'three')
    throw Error("MyLogError MISMATCH");
  if(sortNumbers('three five nine') !== 'three five nine')
    throw Error("MyLogError MISMATCH");
  if(
      sortNumbers(
        'five zero four seven nine eight') !== 'zero four five seven eight nine'
    )
    throw Error("MyLogError MISMATCH");
  if(
      sortNumbers(
        'six five four three two one zero') !== 'zero one two three four five six'
    )
    throw Error("MyLogError MISMATCH");
}

test();
