function f_gold(arr, N, k) {
  var MS = Array(N).fill(0);
  MS[N - 1] = arr[N - 1];
  for (var i = N - 2; i >= 0; i--) {
    if (i + k + 1 >= N) MS[i] = Math.max(arr[i], MS[i + 1]);
    else MS[i] = Math.max(arr[i] + MS[i + k + 1], MS[i + 1]);
  }
  return MS[0];
}

