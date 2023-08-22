function f_gold(num) {
  if (num < 0) return false;
  c = (-2 * num);
  b, a = 1, 1;
  d = (b * b) - (4 * a * c);
  if (d < 0) return false;
  root1 = (-b + Math.sqrt(d)) / (2 * a);
  root2 = (-b - Math.sqrt(d)) / (2 * a);
  if (root1 > 0 && Math.floor(root1) == root1) return true;
  if (root2 > 0 && Math.floor(root2) == root2) return true;
  return false;
}

