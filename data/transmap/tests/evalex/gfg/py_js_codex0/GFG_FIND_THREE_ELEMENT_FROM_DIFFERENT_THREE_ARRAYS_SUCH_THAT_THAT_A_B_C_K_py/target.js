function f_gold(a1, a2, a3, n1, n2, n3, sum) {
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      for (let k = 0; k < n3; k++) {
        if (a1[i] + a2[j] + a3[k] == sum) return true;
      }
    }
  }
  return false;
}

