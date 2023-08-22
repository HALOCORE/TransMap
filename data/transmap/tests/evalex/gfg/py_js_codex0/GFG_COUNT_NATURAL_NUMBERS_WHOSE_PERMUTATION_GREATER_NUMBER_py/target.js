function f_gold(n) {
  var result = 0;
  for (var i = 1; i < 10; i++) {
    var s = [];
    if (i <= n) {
      s.push(i);
      result += 1;
    }
    while (s.length != 0) {
      var tp = s[s.length - 1];
      s.pop();
      for (var j = tp % 10; j < 10; j++) {
        var x = tp * 10 + j;
        if (x <= n) {
          s.push(x);
          result += 1;
        }
      }
    }
  }
  return result;
}

