function f_gold(s) {
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'a') aCount = (1 + 2 * aCount);
    else if (s[i] == 'b') bCount = (aCount + 2 * bCount);
    else if (s[i] == 'c') cCount = (bCount + 2 * cCount);
  }
  return cCount;
}

