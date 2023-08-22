function f_gold(arr, n, sum) {
  for (let i = 0; i < n; i++) {
    let curr_sum = arr[i];
    let j = i + 1;
    while (j <= n) {
      if (curr_sum == sum) {
        console.log("Sum found between");
        console.log("indexes " + i + " and " + (j - 1));
        return 1;
      }
      if (curr_sum > sum || j == n) break;
      curr_sum = curr_sum + arr[j];
      j += 1;
    }
  }
  console.log("No subarray found");
  return 0;
}

