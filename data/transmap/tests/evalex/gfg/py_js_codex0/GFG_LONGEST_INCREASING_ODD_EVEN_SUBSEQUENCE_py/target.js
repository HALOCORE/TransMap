function f_gold(arr, n) {
  let lioes = [];
  let maxLen = 0;
  for (let i = 0; i < n; i++) lioes.push(1);
  let i = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && (arr[i] + arr[j]) % 2 != 0 && lioes[i] < lioes[j] + 1) lioes[i] = lioes[j] + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (maxLen < lioes[i]) maxLen = lioes[i];
  }
  return maxLen;
}

