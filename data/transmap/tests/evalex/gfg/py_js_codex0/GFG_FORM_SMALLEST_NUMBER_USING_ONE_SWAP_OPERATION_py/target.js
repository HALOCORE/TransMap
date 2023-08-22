function f_gold(num) {
  num = num.split("");
  var n = num.length;
  var rightMin = Array(n).fill(0);
  var right = 0;
  rightMin[n - 1] = -1;
  right = n - 1;
  for (var i = n - 2; i >= 0; i--) {
    if (num[i] > num[right]) rightMin[i] = right;
    else {
      rightMin[i] = -1;
      right = i;
    }
  }
  var small = -1;
  for (var i = 1; i < n; i++) {
    if (num[i] != '0') {
      if (small == -1) {
        if (num[i] < num[0]) small = i;
      } else if (num[i] < num[small]) small = i;
    }
  }
  if (small != -1) {
    var temp = num[0];
    num[0] = num[small];
    num[small] = temp;
  } else {
    for (var i = 1; i < n; i++) {
      if (rightMin[i] != -1) {
        var temp = num[i];
        num[i] = num[rightMin[i]];
        num[rightMin[i]] = temp;
        break;
      }
    }
  }
  return num.join("");
}

