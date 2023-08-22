function f_gold(a, b) {
  if(a == 0 || b == 0) return false;
  var result = a * b;
  if(result >= 9223372036854775807 || result <= - 9223372036854775808) result = 0;
  if(a ==(result / b)) {
    console.log(result / b);
    return false;
  }
  else return true;
}

