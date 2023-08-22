function f_gold(digits, n) {
  let count = Array(n + 1).fill(0);
  count[0] = 1;
  count[1] = 1;
  for (let i = 2; i <= n; i++) {
    count[i] = 0;
    if (digits[i - 1] > '0') count[i] = count[i - 1];
    if (digits[i - 2] == '1' || (digits[i - 2] == '2' && digits[i - 1] < '7')) count[i] += count[i - 2];
  }
  return count[n];
}

