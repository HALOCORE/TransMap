function f_gold(arr, n) {
  let fw = Array(n).fill(0);
  let bw = Array(n).fill(0);
  let cur_max = max_so_far = arr[0];
  for (let i = 0; i < n; i++) {
    cur_max = Math.max(arr[i], cur_max + arr[i]);
    max_so_far = Math.max(max_so_far, cur_max);
    fw[i] = cur_max;
  }
  cur_max = max_so_far = bw[n - 1] = arr[n - 1];
  let i = n - 2;
  while (i >= 0) {
    cur_max = Math.max(arr[i], cur_max + arr[i]);
    max_so_far = Math.max(max_so_far, cur_max);
    bw[i] = cur_max;
    i -= 1;
  }
  let fans = max_so_far;
  for (let i = 1; i < n - 1; i++) fans = Math.max(fans, fw[i - 1] + bw[i + 1]);
  return fans;
}

