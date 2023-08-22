function f_gold(arr, k, n) {
  for (let c = 0; c < k; c++) {
    let max_so_far = -Infinity;
    let max_here = 0;
    let start = 0;
    let end = 0;
    let s = 0;
    for (let i = 0; i < n; i++) {
      max_here += arr[i];
      if (max_so_far < max_here) {
        max_so_far = max_here;
        start = s;
        end = i;
      }
      if (max_here < 0) {
        max_here = 0;
        s = i + 1;
      }
    }
    console.log("Maximum non-overlapping sub-array sum", c + 1, ": ", max_so_far, ", starting index: ", start, ", ending index: ", end, ".", sep = "");
    for (let l = start; l <= end; l++) arr[l] = -Infinity;
  }
  console.log();
}

