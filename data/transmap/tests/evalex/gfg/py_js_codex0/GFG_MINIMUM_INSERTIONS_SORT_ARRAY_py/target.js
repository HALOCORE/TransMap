function f_gold(arr, N) {
  var lis = Array(N).fill(0);
  for (var i = 0; i < N; i++) lis[i] = 1;
  for (var i = 1; i < N; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] >= arr[j] && lis[i] < lis[j] + 1) lis[i] = lis[j] + 1;
    }
  }
  var max = 0;
  for (var i = 0; i < N; i++) {
    if (max < lis[i]) max = lis[i];
  }
  return N - max;
}

