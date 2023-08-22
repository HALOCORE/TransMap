function f_gold(ar, n) {
  if(n <= 4) return Math.min(...ar);
  let sum = new Array(n).fill(0);
  sum[0] = ar[0];
  sum[1] = ar[1];
  sum[2] = ar[2];
  sum[3] = ar[3];
  for(let i = 4;i < n;i++) sum[i] = ar[i] + Math.min(...sum.slice(i - 4, i));
  return Math.min(...sum.slice(n - 4, n));
}

