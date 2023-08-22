function f_gold(a, b) {
  var result = 0;
  var rem = 0;
  if(a < b) {
    a = [b, b = a][0];
  }
  while(b > 0) {
    result += parseInt(a / b);
    rem = parseInt(a % b);
    a = b;
    b = rem;
  }
  return result;
}

