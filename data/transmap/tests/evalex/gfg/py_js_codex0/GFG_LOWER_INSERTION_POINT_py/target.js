function f_gold(arr, n, X) {
  if(X < arr[0]) return 0;
  else if(X > arr[n - 1]) return n;
  let lowerPnt = 0;
  let i = 1;
  while(i < n && arr[i] < X) {
    lowerPnt = i;
    i = i * 2;
  }
  while(lowerPnt < n && arr[lowerPnt] < X) lowerPnt += 1;
  return lowerPnt;
}

