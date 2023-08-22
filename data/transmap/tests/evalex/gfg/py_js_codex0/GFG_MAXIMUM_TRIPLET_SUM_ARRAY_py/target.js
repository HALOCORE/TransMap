function f_gold(arr, n) {
  let sm = - 1000000;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (sm < (arr[i] + arr[j] + arr[k])) sm = arr[i] + arr[j] + arr[k];
      }
    }
  }
  return sm;
}

