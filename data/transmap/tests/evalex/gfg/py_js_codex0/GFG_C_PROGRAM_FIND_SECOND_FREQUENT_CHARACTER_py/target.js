function f_gold(str) {
  var NO_OF_CHARS = 256;
  var count = new Array(NO_OF_CHARS).fill(0);
  for (var i = 0; i < str.length; i++) count[str.charCodeAt(i)] += 1;
  var first = 0;
  var second = 0;
  for (var i = 0; i < NO_OF_CHARS; i++) {
    if (count[i] > count[first]) {
      second = first;
      first = i;
    } else if (count[i] > count[second] && count[i] != count[first]) second = i;
  }
  return String.fromCharCode(second);
}

