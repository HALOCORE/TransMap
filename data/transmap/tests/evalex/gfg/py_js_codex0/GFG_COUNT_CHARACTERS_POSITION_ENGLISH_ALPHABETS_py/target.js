function f_gold(str) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    if ((i == str.charCodeAt(i) - "a".charCodeAt(0)) || (i == str.charCodeAt(i) - "A".charCodeAt(0))) result += 1;
  }
  return result;
}

