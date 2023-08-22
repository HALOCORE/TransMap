function f_gold(string) {
  let l = 0;
  let h = string.length - 1;
  while (h > l) {
    l += 1;
    h -= 1;
    if (string[l - 1] != string[h + 1]) return false;
  }
  return true;
}

