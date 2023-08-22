function f_gold(st) {
  var l = st.length;
  var arr = Array(l).fill(0);
  for (var i = 0; i < l; i++) {
    for (var j = i; j < l; j++) {
      for (var k = j; k < l; k++) {
        if (arr[i] % 8 == 0) return true;
        else if ((arr[i] * 10 + arr[j]) % 8 == 0 && i != j) return true;
        else if ((arr[i] * 100 + arr[j] * 10 + arr[k]) % 8 == 0 && i != j && j != k && i != k) return true;
      }
    }
  }
  return false;
}

