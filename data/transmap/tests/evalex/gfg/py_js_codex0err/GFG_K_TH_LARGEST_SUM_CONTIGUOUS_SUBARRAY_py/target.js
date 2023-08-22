const f_gold = (arr, n, k) => {
  let sum = [];
  sum.push(0);
  sum.push(arr[0]);
  for (let i = 2; i < n + 1; i++) sum.push(sum[i - 1] + arr[i - 1]);
  let Q = [];
  for (let i = 1; i < n + 1; i++) {
    for (let j = i; j < n + 1; j++) {
      let x = sum[j] - sum[i - 1];
      if (Q.length < k) Q.push(x);
      else {
        if (Q[0] < x) {
          Q.shift();
          Q.push(x);
        }
      }
    }
  }
  return Q[0];
};

