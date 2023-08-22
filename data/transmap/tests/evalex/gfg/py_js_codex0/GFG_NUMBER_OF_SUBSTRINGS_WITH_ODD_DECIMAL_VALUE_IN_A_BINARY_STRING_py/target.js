function f_gold(s) {
  var n = s.length;
  var auxArr = Array(n).fill(0);
  if(s[0] == '1') auxArr[0] = 1;
  for(var i = 0; i < n; i++) {
    if(s[i] == '1') auxArr[i] = auxArr[i - 1] + 1;
    else auxArr[i] = auxArr[i - 1];
  }
  var count = 0;
  for(var i = n - 1; i >= 0; i--) {
    if(s[i] == '1') count += auxArr[i];
  }
  return count;
}

