function f_gold(arr1, n, arr2, m) {
  let table = Array(m).fill(0);
  for (let j = 0; j < m; j++) table[j] = 0;
  for (let i = 0; i < n; i++) {
    let current = 0;
    for (let j = 0; j < m; j++) {
      if (arr1[i] == arr2[j]) {
        if (current + 1 > table[j]) table[j] = current + 1;
      }
      if (arr1[i] > arr2[j]) {
        if (table[j] > current) current = table[j];
      }
    }
  }
  let result = 0;
  for (let i = 0; i < m; i++) {
    if (table[i] > result) result = table[i];
  }
  return result;
}

