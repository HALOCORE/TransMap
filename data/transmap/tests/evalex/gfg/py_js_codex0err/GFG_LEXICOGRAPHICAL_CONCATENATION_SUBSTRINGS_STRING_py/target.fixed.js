function f_gold(s) {
  var n = s.length;
  var sub_count = Math.floor((n * (n + 1)) / 2);
  var arr = Array(sub_count).fill(0);
  var index = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n - i + 1; j++) {arr[index] = s.substring(i, i + j);
        index += 1;}
  }
  arr.sort();
  var res = "";
  for (var i = 0; i < sub_count; i++) res += arr[i];
  return res;
}

