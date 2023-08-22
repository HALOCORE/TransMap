function f_gold(n) {
  var count = 0;
  if(n &&(!(n &(n - 1)))) {
    while(n > 1) {
      n >>= 1;
      count += 1;
    }
    if(count % 2 == 0) return true;
    else return false;
  }
}

