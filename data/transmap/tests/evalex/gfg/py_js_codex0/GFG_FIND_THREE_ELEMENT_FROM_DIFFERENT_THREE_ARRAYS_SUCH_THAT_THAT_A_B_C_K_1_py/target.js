function f_gold(a1, a2, a3, n1, n2, n3, sum) {
  let s = new Set();
  for (let i = 0; i < n1; i++) s.add(a1[i]);
  for (let i = 0; i < n2; i++) {
    for (let j = 0; j < n3; j++) {
      if (s.has(sum - a2[i] - a3[j])) return true;
    }
  }
  return false;
}

