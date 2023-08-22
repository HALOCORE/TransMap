function f_gold(x1, y1, x2, y2, r1, r2) {
  var distSq = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  var radSumSq = (r1 + r2) * (r1 + r2);
  if (distSq == radSumSq) return 1;
  else if (distSq > radSumSq) return -1;
  else return 0;
}

