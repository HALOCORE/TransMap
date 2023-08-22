function f_gold(s) {
  if(s == " ") return "a";
  var i = s.length - 1;
  while(s[i] == 'z' && i >= 0) i--;
  if(i == -1) s = s + 'a';
  else s = s.replace(s[i], String.fromCharCode(s[i].charCodeAt(0) + 1), 1);
  return s;
}

