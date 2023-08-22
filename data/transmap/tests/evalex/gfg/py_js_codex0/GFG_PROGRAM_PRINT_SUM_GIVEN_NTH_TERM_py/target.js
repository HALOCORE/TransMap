function f_gold(n) {
  let S = 0;
  for (let i = 1; i <= n; i++) S += i * i - (i - 1) * (i - 1);
  return S;
}

