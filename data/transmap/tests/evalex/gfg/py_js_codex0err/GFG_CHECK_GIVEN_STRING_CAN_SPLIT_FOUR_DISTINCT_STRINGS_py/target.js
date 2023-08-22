function f_gold(s) {
  if (s.length >= 10) return true;
  for (let i = 1; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      for (let k = j + 1; k < s.length; k++) {
        let s1 = s.substring(0, i);
        let s2 = s.substring(i, j - i);
        let s3 = s.substring(j, k - j);
        let s4 = s.substring(k, s.length - k);
        if (s1 != s2 && s1 != s3 && s1 != s4 && s2 != s3 && s2 != s4 && s3 != s4) return true;
      }
    }
  }
  return false;
}

