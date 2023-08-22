function f_gold(arr, n) {
  let mls = [];
  let max = 0;
  for (let i = 0; i < n; i++) mls.push(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (Math.abs(arr[i] - arr[j]) <= 1 && mls[i] < mls[j] + 1) mls[i] = mls[j] + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (max < mls[i]) max = mls[i];
  }
  return max;
}

