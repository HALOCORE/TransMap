function f_gold(str1) {
  var result = 0;
  var n = str1.length;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (Math.abs(str1.charCodeAt(i) - str1.charCodeAt(j)) == Math.abs(i - j)) result += 1;
    }
  }
  return result;
}

