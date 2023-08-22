function f_gold(arr, n, k) {
  if (k > n) return -1;
  let csum = Array(n).fill(0);
  csum[0] = arr[0];
  for (let i = 1; i < n; i++) csum[i] = csum[i - 1] + arr[i];
  let max_sum = csum[k - 1];
  let max_end = k - 1;
  for (let i = k; i < n; i++) {
    let curr_sum = csum[i] - csum[i - k];
    if (curr_sum > max_sum) {
      max_sum = curr_sum;
      max_end = i;
    }
  }
  return max_end - k + 1;
}

