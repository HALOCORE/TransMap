//TESTED_PROGRAM

if(
    JSON.stringify(even_odd_palindrome(123)) !== JSON.stringify([8, 13])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(12)) !== JSON.stringify([4, 6])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(3)) !== JSON.stringify([1, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(63)) !== JSON.stringify([6, 8])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(25)) !== JSON.stringify([5, 6])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(19)) !== JSON.stringify([4, 6])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(9)) !== JSON.stringify([4, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_palindrome(1)) !== JSON.stringify([0, 1])
  )
  throw Error("MyLogError MISMATCH");