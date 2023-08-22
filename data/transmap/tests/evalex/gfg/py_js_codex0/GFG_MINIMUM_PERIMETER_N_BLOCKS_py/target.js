function f_gold(n) {
  var l = Math.sqrt(n);
  var sq = l * l;
  if (sq == n) return l * 4;
  else {
    var row = n / l;
    var perimeter = 2 * (l + row);
    if (n % l != 0) perimeter += 2;
    return perimeter;
  }
}

