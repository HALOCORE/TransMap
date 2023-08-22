function f_gold(s) {
  var l = s.length;
  var s1 = "";
  if(l % 2 == 0) {
    var isEven = true;
  }
  else {
    var isEven = false;
  }
  for(var i = 0;i < l;i += 2) {
    if(isEven) {
      s1 = s[i] + s1;
      s1 += s[i + 1];
    }
    else {
      if(l - i > 1) {
        s1 += s[i];
        s1 = s[i + 1] + s1;
      }
      else {
        s1 += s[i];
      }
    }
  }
  return s1;
}

