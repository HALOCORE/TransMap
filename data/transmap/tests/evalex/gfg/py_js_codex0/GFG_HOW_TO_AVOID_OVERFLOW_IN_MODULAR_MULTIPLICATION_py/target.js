function f_gold(a, b, mod) {
  var res = 0;
  a = a % mod;
  while(b > 0) {
    if(b % 2 == 1) res = (res + a) % mod;
    a = (a * 2) % mod;
    b = Math.floor(b / 2);
  }
  return res % mod;
}

