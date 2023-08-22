function f_gold(n) {
  var count = 0;
  var curr = 19;
  while (true) {
    var sum = 0;
    var x = curr;
    while (x > 0) {
      sum = sum + x % 10;
      x = Math.floor(x / 10);
    }
    if (sum == 10) count += 1;
    if (count == n) return curr;
    curr += 9;
  }
  return -1;
}

