function f_gold(s, t) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (count == s.length) break;
    if (t[i] == s[count]) count = count + 1;
  }
  return count;
}

