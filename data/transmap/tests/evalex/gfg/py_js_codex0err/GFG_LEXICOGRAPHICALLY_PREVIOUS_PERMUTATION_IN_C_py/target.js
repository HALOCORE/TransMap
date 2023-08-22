function f_gold(str) {
  var n = str.length - 1;
  var i = n;
  while (i > 0 && str[i - 1] <= str[i]) i--;
  if (i <= 0) return false;
  var j = i - 1;
  while (j + 1 <= n && str[j + 1] <= str[i - 1]) j++;
  str = str.split("");
  var temp = str[i - 1];
  str[i - 1] = str[j];
  str[j] = temp;
  str = str.join("");
  str[:: - 1];
  return true, str;
}

