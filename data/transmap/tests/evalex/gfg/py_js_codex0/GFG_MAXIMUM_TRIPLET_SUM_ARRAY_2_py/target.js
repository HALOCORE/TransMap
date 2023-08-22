function f_gold(arr, n) {
  let maxA = - 100000000;
  let maxB = - 100000000;
  let maxC = - 100000000;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maxA) {
      maxC = maxB;
      maxB = maxA;
      maxA = arr[i];
    }
    else if (arr[i] > maxB) {
      maxC = maxB;
      maxB = arr[i];
    }
    else if (arr[i] > maxC) maxC = arr[i];
  }
  return (maxA + maxB + maxC);
}


