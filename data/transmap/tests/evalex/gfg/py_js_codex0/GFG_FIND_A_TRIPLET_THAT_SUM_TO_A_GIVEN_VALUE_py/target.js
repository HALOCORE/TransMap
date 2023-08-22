function f_gold(A, arr_size, sum) {
  for (let i = 0; i < arr_size - 2; i++) {
    for (let j = i + 1; j < arr_size - 1; j++) {
      for (let k = j + 1; k < arr_size; k++) {
        if (A[i] + A[j] + A[k] == sum) {
          console.log("Triplet is", A[i], ", ", A[j], ", ", A[k]);
          return true;
        }
      }
    }
  }
  return false;
}

