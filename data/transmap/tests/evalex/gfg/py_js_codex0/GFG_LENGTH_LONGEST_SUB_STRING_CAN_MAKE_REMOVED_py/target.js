function f_gold(S) {
  var arr = [];
  arr.push(['@', - 1]);
  var maxlen = 0;
  for (var i = 0; i < S.length; i++) {
    arr.push([S[i], i]);
    while (arr.length >= 3 && arr[arr.length - 3][0] == '1' && arr[arr.length - 2][0] == '0' && arr[arr.length - 1][0] == '0') {
      arr.pop();
      arr.pop();
      arr.pop();
    }
    var tmp = arr[arr.length - 1];
    maxlen = Math.max(maxlen, i - tmp[1]);
  }
  return maxlen;
}

