const f_gold = (arr, n, x, y) => {
  let min_dist = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (arr[i] == x || arr[i] == y) {
      let prev = i;
      break;
    }
  }
  while (i < n) {
    if (arr[i] == x || arr[i] == y) {
      if (arr[prev] != arr[i] && (i - prev) < min_dist) {
        min_dist = i - prev;
        prev = i;
      }
      else prev = i;
    }
    i++;
  }
  return min_dist;
}

