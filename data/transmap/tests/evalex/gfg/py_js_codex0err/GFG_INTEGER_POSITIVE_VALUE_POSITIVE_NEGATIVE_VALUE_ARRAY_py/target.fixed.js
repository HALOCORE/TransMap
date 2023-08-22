function f_gold(arr, n) {
  let hash = {};
  let maximum = 0;
  for (let i of arr) {
    if (i < 0) {
      if (!(Math.abs(i) in hash)) hash[Math.abs(i)] = -1;
      else hash[Math.abs(i)] -= 1;
    } else hash[i] = (hash[i] || 0) + 1;
  }
  for (let i of arr) {
    if (i in hash && hash[i] > 0) return i;
  }
  return -1;
}

