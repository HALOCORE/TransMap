function f_gold(str_) {
  var n = str_.length;
  var arr = Array(n).fill(0);
  var concat = str_ + str_;
  for (var i = 0; i < n; i++) arr[i] = concat.substring(i, n + i);
  arr.sort();
  return arr[0];
}

