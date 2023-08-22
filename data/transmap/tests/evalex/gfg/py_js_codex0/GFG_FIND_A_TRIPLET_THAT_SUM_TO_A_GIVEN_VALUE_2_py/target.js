function f_gold(A, arr_size, sum) {
  for (let i = 0; i < arr_size - 1; i++) {
    let s = new Set();
    let curr_sum = sum - A[i];
    for (let j = i + 1; j < arr_size; j++) {
      if (s.has(curr_sum - A[j])) {
        console.log("Triplet is", A[i], ", ", A[j], ", ", curr_sum - A[j]);
        return true;
      }
      s.add(A[j]);
    }
  }
  return false;
}

