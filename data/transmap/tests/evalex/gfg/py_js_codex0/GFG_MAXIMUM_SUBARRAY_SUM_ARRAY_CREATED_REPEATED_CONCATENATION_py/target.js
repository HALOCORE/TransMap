function f_gold(a, n, k) {
  let max_so_far = -2147483648;
  let max_ending_here = 0;
  for (let i = 0; i < n * k; i++) {
    max_ending_here = max_ending_here + a[i % n];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

