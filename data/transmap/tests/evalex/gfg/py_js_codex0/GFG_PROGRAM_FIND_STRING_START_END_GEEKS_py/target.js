function f_gold(str, corner) {
  var n = str.length;
  var cl = corner.length;
  if(n < cl) return false;
  return((str.substring(0, cl) == corner) && (str.substring(n - cl) == corner));
}

