function f_gold(s) {
  var n = s.length;
  var count = 0;
  for (var i = 0; i < n; i++) {
    if (s[i] == '4' || s[i] == '8' || s[i] == '0') count += 1;
  }
  for (var i = 0; i < n - 1; i++) {
    var h = (s.charCodeAt(i) - '0'.charCodeAt(0)) * 10 + (s.charCodeAt(i + 1) - '0'.charCodeAt(0));
    if (h % 4 == 0) count = count + i + 1;
  }
  return count;
}

