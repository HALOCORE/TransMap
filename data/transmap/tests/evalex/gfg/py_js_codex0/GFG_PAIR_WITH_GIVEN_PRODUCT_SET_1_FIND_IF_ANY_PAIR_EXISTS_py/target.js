function f_gold(arr, n, x) {
  for (let i of arr) {
    for (let j of arr) {
      if (i * j == x) return true;
    }
  }
  return false;
}

