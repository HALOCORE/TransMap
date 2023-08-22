function f_gold(arr, n) {
  let leftMax = new Array(n);
  leftMax[0] = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i - 1], arr[i - 1]);
  let rightMin = Number.POSITIVE_INFINITY;
  for (let i = n - 1; i >= 0; i--) {
    if (leftMax[i] < arr[i] && rightMin > arr[i]) return i;
    rightMin = Math.min(rightMin, arr[i]);
  }
  return -1;
}

