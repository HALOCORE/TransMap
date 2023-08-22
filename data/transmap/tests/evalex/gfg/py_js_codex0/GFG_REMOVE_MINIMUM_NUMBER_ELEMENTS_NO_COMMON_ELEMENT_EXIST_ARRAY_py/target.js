function f_gold(a, b, n, m) {
  let countA = {};
  let countB = {};
  for (let i = 0; i < n; i++) countA[a[i]] = countA.get(a[i], 0) + 1;
  for (let i = 0; i < n; i++) countB[b[i]] = countB.get(b[i], 0) + 1;
  let res = 0;
  for (let x in countA) {
    if (x in countB.keys()) res += Math.min(countA[x], countB[x]);
  }
  return res;
}

