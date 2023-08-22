const f_gold = (s, c1, c2) => {
  let l = s.length;
  for (let i = 0; i < l; i++) {
    if (s[i] == c1) s = s.substring(0, i) + c2 + s.substring(i + 1);
    else if (s[i] == c2) s = s.substring(0, i) + c1 + s.substring(i + 1);
  }
  return s;
};


