function f_gold(num) {
  var length = num.length;
  if(length == 1 && num[0] == '0') return true;
  if(length % 3 == 1) {
    num = num + "00";
    length += 2;
  }
  else if(length % 3 == 2) {
    num = num + "0";
    length += 1;
  }
  var sum = 0;
  var p = 1;
  for(var i = length - 1;i >= 0;i--) {
    var group = 0;
    group += num.charCodeAt(i) - '0'.charCodeAt(0);
    i--;
    group += (num.charCodeAt(i) - '0'.charCodeAt(0)) * 10;
    i--;
    group += (num.charCodeAt(i) - '0'.charCodeAt(0)) * 100;
    sum = sum + group * p;
    p *= (- 1);
  }
  sum = Math.abs(sum);
  return (sum % 13 == 0);
}

