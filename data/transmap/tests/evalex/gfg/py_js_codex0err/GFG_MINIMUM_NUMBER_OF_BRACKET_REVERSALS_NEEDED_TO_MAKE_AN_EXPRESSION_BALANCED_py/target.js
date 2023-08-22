function f_gold(expr) {
  var lenn = expr.length;
  if(lenn % 2) return - 1;
  var s = [];
  for(var i = 0;i < lenn;i++) {
    if(expr[i] == '' && s.length) {
      if(s[0] == '') s.pop(0);
      else s.insert(0, expr[i]);
    }
    else s.insert(0, expr[i]);
  }
  var red_len = s.length;
  var n = 0;
  while(s.length && s[0] == '') {
    s.pop(0);
    n += 1;
  }
  return(red_len / 2 + n % 2);
}


