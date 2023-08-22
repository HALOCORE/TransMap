function f_gold(n) {
  let multiTerms = n * (n + 1) / 2;
  let sm = multiTerms;
  for (let i = 2; i <= n; i++) {
    multiTerms = multiTerms - (i - 1);
    sm = sm + multiTerms * i;
  }
  return sm;
}

