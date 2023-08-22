function f_gold(N) {
  if (N <= 6) return N;
  var screen = Array(N).fill(0);
  for (var n = 1; n <= 6; n++) screen[n - 1] = n;
  for (var n = 7; n <= N; n++) screen[n - 1] = Math.max(2 * screen[n - 4], Math.max(3 * screen[n - 5], 4 * screen[n - 6]));
  return screen[N - 1];
}

