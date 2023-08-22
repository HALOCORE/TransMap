function f_gold(m) {
  for (let i = 0; i < m.length; i++) {
    let sm = 0;
    for (let j = 0; j < m[i].length; j++) sm = sm + m[i][j];
    if (sm != 1) return false;
  }
  return true;
}

