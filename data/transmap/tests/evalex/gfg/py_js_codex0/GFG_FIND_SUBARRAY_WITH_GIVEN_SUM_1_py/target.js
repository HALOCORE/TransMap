function f_gold(arr, n, sum) {
  let curr_sum = arr[0];
  let start = 0;
  let i = 1;
  while (i <= n) {
    while (curr_sum > sum && start < i - 1) {
      curr_sum = curr_sum - arr[start];
      start += 1;
    }
    if (curr_sum == sum) {
      console.log("Sum found between indexes");
      console.log(start + " and " + (i - 1));
      return 1;
    }
    if (i < n) curr_sum = curr_sum + arr[i];
    i += 1;
  }
  console.log("No subarray found");
  return 0;
}

