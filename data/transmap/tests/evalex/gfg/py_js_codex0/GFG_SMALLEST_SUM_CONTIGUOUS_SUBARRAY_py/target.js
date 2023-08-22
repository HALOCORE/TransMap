const f_gold = (arr, n) => {
  let min_ending_here = Number.MAX_SAFE_INTEGER;
  let min_so_far = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (min_ending_here > 0) min_ending_here = arr[i];
    else min_ending_here += arr[i];
    min_so_far = Math.min(min_so_far, min_ending_here);
  }
  return min_so_far;
};

