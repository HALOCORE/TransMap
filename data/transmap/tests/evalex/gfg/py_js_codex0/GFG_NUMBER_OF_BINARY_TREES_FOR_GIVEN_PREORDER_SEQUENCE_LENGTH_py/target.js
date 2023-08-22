function f_gold(n) {
  let BT = Array(n + 1).fill(0);
  BT[0] = BT[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) BT[i] += BT[j] * BT[i - j - 1];
  }
  return BT[n];
}

