function f_gold(a, b, n, m) {
  let countA = {};
  let countB = {};
  for (let i = 0; i < n; i++) countA[a[i]] = (countA[a[i]] || 0) + 1;
  for (let i = 0; i < n; i++) countB[b[i]] = (countB[b[i]] || 0) + 1;
  let res = 0;
  for (let x of Object.keys(countA).map(Number)) {
    if (x in countB) res += Math.min(countA[x], countB[x]);
  }
  return res;
}

