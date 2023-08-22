function f_gold(num) {
  if (num < 0) return false;
  var c = (-2 * num);
  var b = 1, a = 1;
  var d = (b * b) - (4 * a * c);
  if (d < 0) return false;
  var root1 = (-b + Math.sqrt(d)) / (2 * a);
  var root2 = (-b - Math.sqrt(d)) / (2 * a);
  if (root1 > 0 && Math.floor(root1) == root1) return true;
  if (root2 > 0 && Math.floor(root2) == root2) return true;
  return false;
}

