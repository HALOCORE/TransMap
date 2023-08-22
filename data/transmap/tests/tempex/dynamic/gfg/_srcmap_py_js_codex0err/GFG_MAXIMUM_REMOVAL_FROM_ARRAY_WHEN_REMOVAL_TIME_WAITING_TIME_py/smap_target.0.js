function f_gold(arr, n) {
  let count = 0;
  let cummulative_sum = 0;
  arr.sort();
  for (let i = 0; i < n; i++) {
    if (arr[i] >= cummulative_sum) {
      count += 1;
      cummulative_sum += arr[i];
    }
  }
  return count;
}

