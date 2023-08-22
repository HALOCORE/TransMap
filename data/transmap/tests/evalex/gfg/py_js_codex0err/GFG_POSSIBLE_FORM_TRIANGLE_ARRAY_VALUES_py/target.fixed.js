function f_gold(arr, N) {
  if (N < 3) return false;
  arr.sort((a, b) => a-b);
  for (let i = 0; i < N - 2; i++) {
    if (arr[i] + arr[i + 1] > arr[i + 2]) return true;
  }
}

