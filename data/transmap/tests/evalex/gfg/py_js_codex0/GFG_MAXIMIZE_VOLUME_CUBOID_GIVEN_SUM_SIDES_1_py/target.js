function f_gold(s) {
  var length = Math.floor(s / 3);
  s -= length;
  var breadth = s / 2;
  var height = s - breadth;
  return Math.floor(length * breadth * height);
}

