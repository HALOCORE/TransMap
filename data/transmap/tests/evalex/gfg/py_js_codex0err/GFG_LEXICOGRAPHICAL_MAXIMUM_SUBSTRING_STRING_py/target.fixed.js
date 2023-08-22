function f_gold(str) {
  var mx = "";
  for (var i = 0; i < str.length; i++) {
    mx = (mx >= str.substring(i))? mx : str.substring(i);
  }
  return mx;
}

