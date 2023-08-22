function f_gold(r) {
  if (r <= 0) return 0;
  var result = 4;
  for (var x = 1; x < r; x++) {
    var ySquare = r * r - x * x;
    var y = Math.floor(Math.sqrt(ySquare));
    if (y * y == ySquare) result += 4;
  }
  return result;
}

