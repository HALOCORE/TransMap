const f_gold = (arr, n) => {
  let longest_start = - 1;
  let longest_end = 0;
  for (let start = 0; start < n; start++) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = - Number.MAX_SAFE_INTEGER;
    for (let end = start; end < n; end++) {
      let val = arr[end];
      if (val < min) min = val;
      if (val > max) max = val;
      if (2 * min <= max) break;
      if (end - start > longest_end - longest_start || longest_start == - 1) {
        longest_start = start;
        longest_end = end;
      }
    }
  }
  if (longest_start == - 1) return n;
  return (n - (longest_end - longest_start + 1));
};


