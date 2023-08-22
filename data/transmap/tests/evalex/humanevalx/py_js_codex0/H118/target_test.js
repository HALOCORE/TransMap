//TESTED_PROGRAM

if(get_closest_vowel('yogurt') !== 'u')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('full') !== 'u')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('easy') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('eAsy') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('ali') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('bad') !== 'a')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('most') !== 'o')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('ab') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('ba') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('quick') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('anime') !== 'i')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('Asia') !== '')
  throw Error("MyLogError MISMATCH");
if(get_closest_vowel('Above') !== 'o')
  throw Error("MyLogError MISMATCH");