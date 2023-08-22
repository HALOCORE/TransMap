function f_gold(bin) {
  var n = bin.length;
  if(bin[n - 1] == '1') return false;
  var sum = 0;
  var i = n - 2;
  while(i >= 0) {
    if(bin[i] == '1') {
      var posFromRight = n - i - 1;
      if(posFromRight % 4 == 1) sum = sum + 2;
      else if(posFromRight % 4 == 2) sum = sum + 4;
      else if(posFromRight % 4 == 3) sum = sum + 8;
      else if(posFromRight % 4 == 0) sum = sum + 6;
    }
    i = i - 1;
  }
  if(sum % 10 == 0) return true;
  return false;
}

