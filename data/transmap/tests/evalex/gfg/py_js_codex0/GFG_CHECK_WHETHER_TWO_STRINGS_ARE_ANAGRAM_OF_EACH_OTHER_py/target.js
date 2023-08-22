function f_gold(str1, str2) {
  var n1 = str1.length;
  var n2 = str2.length;
  if (n1 != n2) return 0;
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  for (var i = 0; i < n1; i++) {
    if (str1[i] != str2[i]) return 0;
  }
  return 1;
}

