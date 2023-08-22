function f_gold(n, k) {
  let oneSeen = false;
  while (n > 0) {
    let digit = n % k;
    if (digit > 1) return false;
    if (digit == 1) {
      if (oneSeen) return false;
      oneSeen = true;
    }
    n = Math.floor(n / k);
  }
  return true;
}

