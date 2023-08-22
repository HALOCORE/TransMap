function f_gold(n) {
  var position = 1;
  var m = 1;
  while(!(n & m)) {
    m = m << 1;
    position += 1;
  }
  return position;
}

