function f_gold(start, end, arr) {
  let frequency = {};
  for (let i = start; i <= end; i++) {
    if (arr[i] in frequency) frequency[arr[i]] += 1;
    else frequency[arr[i]] = 1;
  }
  let count = 0;
  for (let x in frequency) {
    if (x == frequency[x]) count += 1;
  }
  return count;
}

