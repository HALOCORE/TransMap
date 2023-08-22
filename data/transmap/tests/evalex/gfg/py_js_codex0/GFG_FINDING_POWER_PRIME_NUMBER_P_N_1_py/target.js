function f_gold(n, p) {
  let ans = 0;
  let temp = p;
  while(temp <= n) {
    ans += n / temp;
    temp = temp * p;
  }
  return Math.floor(ans);
}

