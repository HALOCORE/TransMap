function f_gold(arr, n) {
  let cum_sum = 0;
  for (let i = 0; i < n; i++) cum_sum += arr[i];
  let curr_val = 0;
  for (let i = 0; i < n; i++) curr_val += i * arr[i];
  let res = curr_val;
  for (let i = 1; i < n; i++) {
    let next_val = (curr_val - (cum_sum - arr[i - 1]) + arr[i - 1] * (n - 1));
    curr_val = next_val;
    res = Math.max(res, next_val);
  }
  return res;
}

