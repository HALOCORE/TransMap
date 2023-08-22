function f_gold(r, R, r1, x1, y1) {
  var dis = Math.floor(Math.sqrt(x1 * x1 + y1 * y1));
  return (dis - r1 >= R && dis + r1 <= r);
}

