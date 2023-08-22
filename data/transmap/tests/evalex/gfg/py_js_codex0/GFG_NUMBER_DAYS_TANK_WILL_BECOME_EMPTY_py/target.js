function f_gold(C, l) {
  if (l >= C) return C;
  let eq_root = (Math.sqrt(1 + 8 * (C - l)) - 1) / 2;
  return Math.ceil(eq_root) + l;
}

