function f_gold(A, arr_size, sum) {
  A.sort((a, b) => a-b);
  for (let i = 0; i < arr_size - 2; i++) {
    let l = i + 1;
    let r = arr_size - 1;
    while (l < r) {
      if (A[i] + A[l] + A[r] == sum) {
        console.log("Triplet is", A[i], ', ', A[l], ', ', A[r]);
        return true;
      }
      else if (A[i] + A[l] + A[r] < sum) {
        l += 1;
      }
      else {
        r -= 1;
      }
    }
  }
  return false;
}

