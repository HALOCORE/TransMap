function f_gold(A, B, n) {
  let mp = new Set();
  let result = 0;
  let curr_sum = curr_begin = 0;
  for (let i = 0; i < n; i++) {
    while (mp.has(A[i])) {
      mp.delete(A[curr_begin]);
      curr_sum -= B[curr_begin];
      curr_begin++;
    }
    mp.add(A[i]);
    curr_sum += B[i];
    result = Math.max(result, curr_sum);
  }
  return result;
}

