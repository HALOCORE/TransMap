function f_gold(str) {
  var mx = "";
  for (var i = 0; i < str.length; i++) {
    mx = Math.max(mx, str.substring(i));
  }
  return mx;
}

