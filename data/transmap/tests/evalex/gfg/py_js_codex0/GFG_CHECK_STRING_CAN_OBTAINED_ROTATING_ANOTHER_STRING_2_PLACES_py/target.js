function f_gold(str1, str2) {
  if (str1.length != str2.length) return false;
  var clock_rot = "";
  var anticlock_rot = "";
  var l = str2.length;
  anticlock_rot = anticlock_rot + str2.substring(l - 2, l) + str2.substring(0, l - 2);
  clock_rot = clock_rot + str2.substring(2, l) + str2.substring(0, 2);
  return str1 == clock_rot || str1 == anticlock_rot;
}

