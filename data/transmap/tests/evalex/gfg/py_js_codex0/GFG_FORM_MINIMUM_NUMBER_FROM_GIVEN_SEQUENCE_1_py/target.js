function f_gold(seq) {
  var n = seq.length;
  if(n >= 9) return "-1";
  var result = Array(n + 1);
  var count = 1;
  for(var i = 0;i < n + 1;i++) {
    if(i == n || seq[i] == 'I') {
      for(var j = i - 1;j >= - 1;j--) {
        result[j + 1] = parseInt('0' + count);
        count += 1;
        if(j >= 0 && seq[j] == 'I') break;
      }
    }
  }
  return result;
}

