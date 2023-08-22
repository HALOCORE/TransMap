function f_gold(m, x, revenue, n, t) {
  let maxRev = Array(m + 1).fill(0);
  let nxtbb = 0;
  for (let i = 1; i <= m; i++) {
    if (nxtbb < n) {
      if (x[nxtbb] != i) maxRev[i] = maxRev[i - 1];
      else {
        if (i <= t) maxRev[i] = Math.max(maxRev[i - 1], revenue[nxtbb]);
        else maxRev[i] = Math.max(maxRev[i - t - 1] + revenue[nxtbb], maxRev[i - 1]);
        nxtbb++;
      }
    } else maxRev[i] = maxRev[i - 1];
  }
  return maxRev[m];
}

